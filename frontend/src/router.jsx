import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import NotFundPage from "./pages/NotFundPage";
import Login from "./pages/LoginLayout/Login";
import LoginLayout from "./layouts/LoginLayout";
import DashBoard from "./pages/adminLayout/DashBoard";
import Events from "./pages/adminLayout/Events"; // Assurez-vous que ces imports sont corrects
import Clients from "./pages/adminLayout/Clients";
import Tasks from "./pages/adminLayout/Tasks";
import Leads from "./pages/adminLayout/Leads";
import Subscriptions from "./pages/adminLayout/Subscriptions";
import Invoices from "./pages/adminLayout/Sales/Invoices";
import Orders from "./pages/adminLayout/Sales/Orders";
import Store from "./pages/adminLayout/Sales/Store";
import Payments from "./pages/adminLayout/Sales/Payments";
import Items from "./pages/adminLayout/Sales/Items";
import Contracts from "./pages/adminLayout/Sales/Contracts";
import EstimateList from "./pages/adminLayout/Prospects/EstimateList";
import EstimateRequests from "./pages/adminLayout/Prospects/EstimateRequests";
import EstimateForm from "./pages/adminLayout/Prospects/EstimateForm";
import Proposals from "./pages/adminLayout/Prospects/Proposals";
import Notes from "./pages/adminLayout/Notes";
import Messages from "./pages/adminLayout/Messages";
import TeamMembers from "./pages/adminLayout/Team/TeamMembers";
import TimeCards from "./pages/adminLayout/Team/TimeCards";
import Leave from "./pages/adminLayout/Leave";
import Announcements from "./pages/adminLayout/Team/Announcements";
import Tickets from "./pages/adminLayout/Team/Tickets";
import Expenses from "./pages/adminLayout/Expenses";
import Reports from "./pages/adminLayout/Reports";
import Files from "./pages/adminLayout/Files";
import Categories from "./pages/adminLayout/Help/Categories";
import Settings from "./pages/adminLayout/Settings";
import Help from "./pages/adminLayout/Help/Help";
import Articles from "./pages/adminLayout/Help/Articles";
import Kwnowledge from "./pages/adminLayout/Help/Kwnowledge";
import KnowledgeBaseArticles from "./pages/adminLayout/Help/KnowledgeBaseArticles";
import KnowledgeBaseCategories from "./pages/adminLayout/Help/KnowledgeBaseCategories";
import TimeLine from "./pages/adminLayout/Team/TimeLine";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/", element: <Navigate to="/dashboard" replace={true} /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/events", element: <Events /> },
      { path: "/clients", element: <Clients /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/leads", element: <Leads /> },
      { path: "/subscriptions", element: <Subscriptions /> },
      { path: "/invoices", element: <Invoices /> },
      { path: "/orders", element: <Orders /> },
      { path: "/store", element: <Store /> },
      { path: "/payments", element: <Payments /> },
      { path: "/items", element: <Items /> },
      { path: "/contracts", element: <Contracts /> },
      { path: "/estimate", element: <EstimateList /> },
      { path: "/estimate_requests", element: <EstimateRequests /> },
      { path: "/estimate_forms", element: <EstimateForm /> },
      { path: "/proposals", element: <Proposals /> },
      { path: "/notes", element: <Notes /> },
      { path: "/message", element: <Messages /> },
      { path: "/team_member", element: <TeamMembers /> },
      { path: "/time_cards", element: <TimeCards /> },
      { path: "/leave", element: <Leave /> },
      { path: "/timeline", element: <TimeLine /> },
      { path: "/announcements", element: <Announcements /> },
      { path: "/tickets", element: <Tickets /> },
      { path: "/expenses", element: <Expenses /> },
      { path: "/reports", element: <Reports /> },
      { path: "/files", element: <Files /> },
      { path: "/help", element: <Help /> },
      { path: "/help/help_articles", element: <Articles /> },
      { path: "/help/help_categories", element: <Categories /> },
      { path: "/help/knowledge_base", element: <Kwnowledge /> },
      {
        path: "/help/knowledge_base_articles",
        element: <KnowledgeBaseArticles />,
      },
      {
        path: "/help/knowledge_base_categories",
        element: <KnowledgeBaseCategories />,
      },
      { path: "/settings/general", element: <Settings /> },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "*",
    element: <NotFundPage />,
  },
]);

export default router;
