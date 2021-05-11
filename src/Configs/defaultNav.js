import AcadPerformance from '../Components/Pages/AcadPerformance';
import Applications from '../Components/Pages/Applications';
import Feedback from '../Components/Pages/Feedback';
import Groupmates from '../Components/Pages/Groupmates';
import Job from '../Components/Pages/Job';
import Messages from '../Components/Pages/Messages';
import Notifications from '../Components/Pages/Notifications';
import Payments from '../Components/Pages/Payments';
import Portfolio from '../Components/Pages/Portfolio';
import Profile from '../Components/Pages/Profile';
import ProjectActivities from '../Components/Pages/ProjectActivities';
import Schedule from '../Components/Pages/Schedule';
import Teachers from '../Components/Pages/Teachers';
export const defaultNav = [
	{
	  id: 0,
	  title: "Профиль",
	  icon: "far fa-user-circle fa-fw",
	  path: "/profile",
	  content: Profile,
	  newNotif:false
	},
	{
	  id: 1,
	  title: "Сообщения",
	  icon: "far fa-comment fa-fw",
	  path: "/messages",
	  content: Messages,
	  newNotif:false
	},
	{
	  id: 2,
	  title: "Расписание",
	  icon: "far fa-clock fa-fw",
	  path: "/schedule",
	  content: Schedule,
	  newNotif:false
	},
	{
	  id: 3,
	  title: "Уведомления",
	  icon: "far fa-bell fa-fw",
	  path: "/notifications",
	  content: Notifications,
	  newNotif:false
	},
	{
	  id: 4,
	  title: "ПД",
	  icon: "far fa-lightbulb fa-fw",
	  path: "/projects",
	  content: ProjectActivities,
	  newNotif:false
	},
	{
	  id: 5,
	  title: "Заявления",
	  icon: "far fa-file-alt fa-fw",
	  path: "/applications",
	  content: Applications,
	  newNotif:false
	},
	{
	  id: 6,
	  title: "Оплата",
	  icon: "fas fa-ruble-sign fa-fw",
	  path: "/payments",
	  content: Payments,
	  newNotif:false
	},
	{
	  id: 7,
	  title: "Другое",
	  icon: "far fa-compass fa-fw",
	  iconRight: "fas fa-angle-down fa-fw",
	  newNotif:false
	},
	{
	  id: 8,
	  title: "Работа",
	  icon: "far fa-building fa-fw",
	  path: "/job",
	  content: Job,
	  newNotif:false
	},
	{
	  id: 9,
	  title: "Студенты",
	  icon: "far fa-id-badge fa-fw",
	  path: "/groupmates",
	  content: Groupmates,
	  newNotif:false
	},
	{
	  id: 10,
	  title: "Преподаватели",
	  icon: "fas fa-chalkboard-teacher",
	  path: "/teachers",
	  content: Teachers,
	  newNotif:false
	},
	{
	  id: 11,
	  title: "Успеваемость",
	  icon: "fas fa-graduation-cap fa-fw",
	  path: "/performance",
	  content: AcadPerformance,
	  newNotif:false
	},
	{
	  id: 12,
	  title: "Портфолио",
	  icon: "far fa-id-card fa-fw",
	  path: "/portfolio",
	  content: Portfolio,
	  newNotif:false
	},
	{
	  id: 13,
	  title: "Обратная связь",
	  icon: "fas fa-headset fa-fw",
	  path: "/feedback",
	  content: Feedback,
	  newNotif:false
	}
 ]