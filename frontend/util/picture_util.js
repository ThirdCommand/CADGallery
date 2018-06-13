export const createPictures = (pictures) => {
  return $.ajax({
    method: 'POST',
    url: '/pictures',
    data: {
      pictures
    }
  })
}




//not sure what the best way to fetch pictures is... 
