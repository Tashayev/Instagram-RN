import {  useSelector as useAppSelector, type TypedUseSelectorHook } from "react-redux";
import type { RootState } from "@/app/store/store";

export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;