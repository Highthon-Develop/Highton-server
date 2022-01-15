import axios from "axios";
import { SchoolInform } from "../repository/school";

export const parseSchoolInform: Function = (data: SchoolInform) =>
  axios({
    method: "GET",
    url: `https://open.neis.go.kr/hub/schoolInfo?Type=json&ATPT_OFCDC_SC_CODE=${data.ATPT_OFCDC_SC_CODE}&SD_SCHUL_CODE=${data.SD_SCHUL_CODE}`,
  });
