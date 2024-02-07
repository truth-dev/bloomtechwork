export const UPLOAD_CAST = 'UPLOAD_CAST';
export const FETCH_CAST = 'FETCH_CAST';


export const uploadCast = (castData) => ({
    type: UPLOAD_CAST,
    payload: castData
})

export const fetchCast = () => ({
    type: FETCH_CAST
}) 
