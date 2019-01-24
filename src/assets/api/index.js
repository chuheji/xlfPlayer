/**
 * Created by 我 on 2018/12/14.
 */
import axios from 'axios'
import {URL, defaultLimit} from 'assets/js/config'

//排行榜列表
export function getToplistDetail() {
  const url = `${URL}/toplist/detail`;
  return axios.get(url)
}

//排行榜详情
export function topList(idx) {
  const url = `${URL}/top/list`;
  return axios.get(url, {
    params: {
      idx
    }
  })
}

//推荐歌单
export function getPersonalized() {
  const url = `${URL}/personalized`;
  return axios.get(url)
}

// 歌单详情
export function songList(id) {
  const url = `${URL}/toplist/detail/mm`;
  return axios.get(url, {
    params: {
      id
    }
  })
}

export function getPlaylistDetail(id) {
  const url = `${URL}/playlist/detail`;
  return axios.get(url, {
    params: {
      id
    }
  })
}

//搜索
export function search(keywords, page = 0, limit = defaultLimit) {
  const url = `${URL}/search`;
  return axios.get(url, {
    params: {
      offset: page * limit,
      limit: limit,
      keywords
    }
  })
}

//热搜
export function searchHot() {
  const url = `${URL}/search/hot`;
  return axios.get(url)
}

//获取用户歌单详情
export function getUserPlaylist(uid) {
  const url = `${URL}/user/playlist`;
  return axios.get(url, {
    params: {
      uid
    }
  })
}

//获取用户喜欢歌曲列表
export function getUserLikelist(uid) {
  const url = `${URL}/likelist`;
  return axios.get(url, {
    params: {
      uid
    }
  })
}

//获取歌曲详情
export function getMusicDetail(ids) {
  const url = `${URL}/song/detail`;
  return axios.get(url, {
    params: {
      ids
    }
  })
}

//获取音乐地址
export function getMusicUrl(id) {
  const url = `${URL}/music/url`;
  return axios.get(url, {
    params: {
      id
    }
  })
}

//获取歌词
export function getLyric(id) {
  const url = `${URL}/lyric`;
  return axios.get(url, {
    params: {
      id
    }
  })
}

// 登录
export function login(phone,password) {
  const url = `${URL}/login/cellphone`;
  return axios.get(url, {
    params: {
      phone,
      password
    }
  })
}

// 查询登录状态
export function loginStatus() {
  const url = `${URL}/login/status`;
  return axios.get(url)
}

//获取banner
export function getBanner() {
  const url = `${URL}/banner`;
  return axios.get(url)
}

//获取音乐评论
export function getComment(id, page, limit = defaultLimit) {
  const url = `${URL}/comment/music`;
  return axios.get(url, {
    params: {
      offset: page * limit,
      limit: limit,
      id
    }
  })
}
