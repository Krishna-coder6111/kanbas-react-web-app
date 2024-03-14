import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string; 
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[]; 
}

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});

export default store;

