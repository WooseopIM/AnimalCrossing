import { createInstance } from "./index.js";

const instance = createInstance();

// 모든 자랑 글 가져오기
export function getShows(shows) {
  return instance
    .get("/shows/list/")
    .then(response => {
      shows = response.data;
      return shows;
    })
    .catch(error => {
      console.log(error);
    });
}

export function getShowById(showId, data) {
  return instance
    .get(`/shows/detail/${showId}/`)
    .then(response => {
      data = response.data;
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}

// 자랑글 쓰기
export function writeShows(article, token, success, fail) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + token
  };
  instance
    .post("/shows/write/", article, { headers })
    .then(success)
    .catch(fail);
}

// 자랑글 삭제하기
export function deleteShows(show_pk, token) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + token
  };
  instance
    .delete(`/shows/detail_ud/${show_pk}/`, { headers })
    .then(response => {
      return response;
    })
    .catch(error => {
      console.log("삭제불가::: ", error);
    });
}

// Show 게시판에서 댓글 달기
export function writeComment(comment, show_id, token, success, fail) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + token
  };
  instance
    .post(`/shows/comment/${show_id}/`, comment, { headers })
    .then(success)
    .catch(fail);
}

// 댓글 삭제하기
export function deleteCommentApi(show_id, token, success, fail) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT " + token
  };
  instance
    .delete(`/shows/comment_ud/${show_id}/`, { headers })
    .then(success)
    .catch(fail);
}
