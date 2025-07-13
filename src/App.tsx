import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, ScrollRestoration } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import TaskDetails from './components/TaskDetails/TaskDetails';
import { categoryValues, priorityValues, statusValues, type ITask } from "./const";
import { getTasksRoute } from './utils';
import TaskDetailsPage from './pages/TaskDetailsPage';
import ErrorPage from './pages/ErrorPage';


function App() {
      const [tasks, setTasks] = useState<ITask[]>([
        {
      id: 0,
      title: "Страница не найдена",
      description: "Необходимо реализовать компонент страницы, который должен высвечиваться при переходе по некорректному url",
      category: categoryValues.FEATURE,
      status: statusValues.DONE,
      priority: priorityValues.HIGH,
    },
    {
      id: 1,
      title: "Потеря позиции скролла",
      description: "После редактирования карточки задачи пользователь вместо того, чтобы увидеть данную карточку в списке задач, видит первые карточки",
      category: categoryValues.BUG,
      status: statusValues.TODO,
      priority: priorityValues.HIGH,
    },
    {
      id: 2,
      title: "Что с архитектурой?",
      description: "Огромное количество непонятных файлов, которые напоминают солянку функционала. Необходимо исправить",
      category: categoryValues.REFACTOR,
      status: statusValues.INPROGRESS,
      priority: priorityValues.LOW,
    },
    {
      id: 3,
      title: "Работа с карточками задач",
      description: "Небходимо реализовать добавление, редактирование и удаление задач",
      category: categoryValues.FEATURE,
      status: statusValues.INPROGRESS,
      priority: priorityValues.HIGH,
    },
    {
      id: 4,
      title: "Фильтрация задач",
      description: "Небходимо реализовать функционал фильтрации задач по одному или нескольким тегам. Теги могут быть одного типа, но не одного значения",
      category: categoryValues.FEATURE,
      status: statusValues.TODO,
      priority: priorityValues.MEDIUM,
    },
    {
      id: 5,
      title: "Ререндер ломает приложение",
      description: "Множественный ререрндер компонента UI-библиотеки <Select> ломает приложение. Необходимо минимизировать количество ререндеров",
      category: categoryValues.BUG,
      status: statusValues.INPROGRESS,
      priority: priorityValues.HIGH,
    },
    {
      id: 6,
      title: "Загрузить проект на гитхаб",
      category: categoryValues.DOCUMENTATION,
      status: statusValues.DONE,
      priority: priorityValues.HIGH,
    },
  ])

  const updateTask = (newData: ITask): void => {
    const index = tasks.findIndex(task=>task.id===newData.id);
    if(index < 0){
      return;
    }
    setTasks([...tasks.slice(0, index), newData, ...tasks.slice(index+1)])
  }
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<TasksPage tasks={tasks}/>} />
        <Route path={getTasksRoute(":id")} element={<TaskDetailsPage tasks={tasks} update={updateTask}/>} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );


}

export default App
