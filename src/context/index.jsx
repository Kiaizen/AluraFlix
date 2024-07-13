import { createContext, useContext, useEffect, useState } from 'react';
import { useFormState } from '../hooks';
import { validateForm1,validateForm2 } from '../utils';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [editarVideo,setEditarVideo] = useState(null)
  const initialForm1State = {
    titulo: '',
    imagem: '',
    video: '',
    select: '',
    descri: ''
  };
  const initialForm2State = {
    titulo: '',
    imagem: '',
    video: '',
    select: '',
    descri: ''
  };

  const form1 = useFormState(initialForm1State, validateForm1)
  const form2 = useFormState(initialForm2State, validateForm2)

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos');
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (editarVideo) {
      form2.aoLimpar(); // Limpar erros ao selecionar um novo vídeo
      form2.setInputs({
        titulo: editarVideo.titulo || '',
        imagem: editarVideo.imagem || '',
        video: editarVideo.video || '',
        select: editarVideo.select || '',
        descri: editarVideo.descri || ''
      });
    }
  }, [editarVideo]);


  const aoSalvar = async (form) => {
    const isValid = form.aoValidar();
    if (isValid) {
      try {
        const response = await fetch('http://localhost:3000/videos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.inputs)
        });
        if (response.ok) {
          console.log('Dados salvos com sucesso!');
          fetchVideos();
          form.aoLimpar();
        } else {
          console.error('Erro ao salvar os dados:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
      }
    }
  };

  const atualizarVideo = async (form) => {
    const isValid = form.aoValidar();
    if (isValid) {
      try {
        const response = await fetch(`http://localhost:3000/videos/${editarVideo.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form.inputs)
        });
        if (response.ok) {
          console.log('Vídeo atualizado com sucesso!');
          fetchVideos();
          form.aoLimpar();
          setEditarVideo(null); // Resetar editarVideo após salvar
        } else {
          console.error('Erro ao atualizar o vídeo:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao atualizar o vídeo:', error);
      }
    }
  };


  const aoDeletar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
        console.log('Vídeo deletado com sucesso!');
      } else {
        console.error('Erro ao deletar vídeo:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao deletar vídeo:', error);
    }
  };

  const selecionarVideo = (video) => { 
    setSelectedVideo(video);
  };

  const editarVideoSelecionado = (video) => {
    setEditarVideo(video)
  }

  return (
    <VideoContext.Provider
      value={{ form1, form2, aoSalvar, videos, selectedVideo, selecionarVideo, editarVideoSelecionado,editarVideo, aoDeletar, atualizarVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};
