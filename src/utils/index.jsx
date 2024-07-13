export const isValidURL = (str) => {
    const pattern =  /^(http|https):\/\/[a-zA-Z0-9.-]+(:\d+)?(\/[a-zA-Z0-9\\/._-]*)?(\?[a-zA-Z0-9=&._-]*)?(\\#[a-zA-Z0-9=&._-]*)?$/g;
    return !!pattern.test(str);
  };
  
  export const validateForm1 = (inputs) => {
    let validationErrors = {};
  
    if (!inputs.titulo) validationErrors.titulo = 'Título é obrigatório';
  
    if (!inputs.imagem) {
      validationErrors.imagem = 'Link da imagem é obrigatório';
    } else if (!isValidURL(inputs.imagem)) {
      validationErrors.imagem = 'Link da imagem é inválido';
    }
  
    if (!inputs.video) {
      validationErrors.video = 'Link do vídeo é obrigatório';
    } else if (!isValidURL(inputs.video)) {
      validationErrors.video = 'Link do vídeo é inválido';
    }
  
    if (!inputs.select) validationErrors.select = 'Categoria é obrigatória';
    if (!inputs.descri) validationErrors.descri = 'Descrição é obrigatória';
  
    return validationErrors;
  };
  
  export const validateForm2 = (inputs) => {
    let validationErrors = {};
  
    if (!inputs.titulo) validationErrors.titulo = 'Título é obrigatório';
  
    if (!inputs.imagem) {
      validationErrors.imagem = 'Link da imagem é obrigatório';
    } else if (!isValidURL(inputs.imagem)) {
      validationErrors.imagem = 'Link da imagem é inválido';
    }
  
    if (!inputs.video) {
      validationErrors.video = 'Link do vídeo é obrigatório';
    } else if (!isValidURL(inputs.video)) {
      validationErrors.video = 'Link do vídeo é inválido';
    }
  
    if (!inputs.select) validationErrors.select = 'Categoria é obrigatória';
    if (!inputs.descri) validationErrors.descri = 'Descrição é obrigatória';
  
    return validationErrors;
  };
  