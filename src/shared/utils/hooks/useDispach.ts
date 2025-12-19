import { useDispatch as useAppDispatch } from 'react-redux'
import type { AppDispatch } from "../../../app/store/store";

export const useDispatch = () => useAppDispatch<AppDispatch>();