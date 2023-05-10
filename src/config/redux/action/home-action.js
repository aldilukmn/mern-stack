import axios from "axios";

export const setDataBlog = (page) => (dispatch) => {
    const url = `http://localhost:3000/v1/blog/posts?page=${page}&perPage=4`;
    axios.get(url)  
    .then(result => {
      const resAPI = result.data;
      dispatch({type: 'UPDATE_DATA_BLOG', payload: resAPI.data});
      dispatch({
        type: 'UPDATE_PAGE', 
        payload: {
        currentPage: resAPI.current_page, 
        totalPage: Math.ceil(resAPI.total_data / resAPI.per_page)
      }})
    })
    .catch(err => { 
      console.log("Error : ", err);
    })
}