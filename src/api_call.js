import axios from "axios";
import {
  url,
  course,
  verifyOtp,
  userUpdateProfile,
  boards,
  classes,
  userLogin,
  lead_url,
  lead_api_key,
} from "./requests";
let token = localStorage.getItem("access-token");
if (token) {
  token = JSON.parse(token);
  token = token.token;
}

export async function courses() {
  const result = await axios.get(`${url}${course}`);
  if (result.status === 200) {
    return result.data.data;
  }
  return [];
}

export async function courseDetail(id) {
  const result = await axios.get(`${url}${course}`);
  if (result.status === 200) {
    // find using id
    const courses = result.data?.data?.[0];
    const subjectData = courses?.subject?.find((subject) => subject._id === id);
    return {
      course_id: courses?._id,
      amount: 1999,
      thumbnailUrl: courses?.thumbnailUrl,
      ...subjectData,
    };
  }
  return {};
}

export async function verifyOtpBeforeSend(data = {}) {
  const result = await axios.post(`${url}${userLogin}`, {
    ...data,
  });
  if (result.status === 200) {
    return result.data;
  }
  return {};
}

export async function verifyOtpData(data = {}) {
  const result = await axios.post(`${url}${verifyOtp}`, {
    ...data,
  });
  if (result.status === 200) {
    return result.data;
  }
  return {};
}

export async function updateProfile(accessToken = token, data = {}) {
  const result = await axios.put(
    `${url}${userUpdateProfile}`,
    {
      ...data,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  if (result.status === 200) {
    return result.data;
  }
  return {};
}

export async function getBoard(accessToken = token) {
  const result = await axios.get(`${url}${boards}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  if (result.status === 200) {
    return result.data?.data[0]?._id;
  }
  return {};
}

export async function getClass(accessToken = token) {
  const result = await axios.get(`${url}${classes}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  if (result.status === 200) {
    return result.data?.data[0]?._id;
  }
  return {};
}

export async function leadsApi(data) {
  const result = await axios.post(
    lead_url,
    {
      ...data,
    },
    {
      headers: {
        "api-key": lead_api_key,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (result.status === 200) {
    return result.data;
  }
  return {};
}
