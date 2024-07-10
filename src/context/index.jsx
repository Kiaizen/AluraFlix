import { createContext, useContext, useEffect, useState } from 'react';

const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [inputs, setInputs] = useState({
    titulo: '',
    imagem: '',
    video: '',
    select: '',
    descri: ''
  });

  const [errors, setErrors] = useState({});
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  const aoMudar = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const validate = () => {
    let validationErrors = {};

    if (!inputs.titulo) validationErrors.titulo = 'Título é obrigatório';

    if (!inputs.imagem) {
      validationErrors.imagem = 'Link da imagem é obrigatório';
    } else if (isValidURL(inputs.imagem)) {
        inputs.imagem = '';
      validationErrors.imagem = 'Link da imagem é inválido';
    }

    if (!inputs.video) {
      validationErrors.video = 'Link do vídeo é obrigatório';
    } else if (isValidURL(inputs.video)) {
        inputs.video = '';
      validationErrors.video = 'Link do vídeo é inválido';
    }

    if (!inputs.select) validationErrors.select = 'Categoria é obrigatória';
    if (!inputs.descri) validationErrors.descri = 'Descrição é obrigatória';

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const isValidURL = (str) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocolo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // nome do domínio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OU endereço IP (v4)
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // porta e caminho
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // string de consulta
      '(\\#[-a-z\\d_]*)?$', 'i' // fragmento localizador
    );
    return !!pattern.test(str);
  };

  const aoLimpar = (e) => {
    e.preventDefault();
    setInputs({
      titulo: '',
      imagem: '',
      video: '',
      select: '',
      descri: ''
    });
    setErrors({});
  };

  const aoSalvar = async () => {
    const isValid = validate();
    if (isValid) {
      try {
        const response = await fetch('http://localhost:3000/videos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(inputs)
        });
        if (response.ok) {
          console.log('Dados salvos com sucesso!');
          fetchVideos();
          setInputs({
            titulo: '',
            imagem: '',
            video: '',
            select: '',
            descri: ''
          });
          setErrors({});
        } else {
          console.error('Erro ao salvar os dados:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao salvar os dados:', error);
      }
    }
  };

  const selecionarVideo = (video) => { 
    setSelectedVideo(video);
  };

  return (
    <VideoContext.Provider
      value={{ inputs, errors, aoMudar, aoLimpar, aoSalvar, videos, selectedVideo, selecionarVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};
