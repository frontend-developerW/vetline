import { useSelector } from "react-redux";
export const useGlobal = () => useSelector(({ global }) => global);
