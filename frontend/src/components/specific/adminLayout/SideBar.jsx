import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className={`sideBar w-60 h-full flex flex-col py-1`}>
      <NavLink
        to="/"
        className="flex items-center justify-center w-full h-[59px] z-50 logo"
      >
        <img src="/src/assets/logo/default-stie-logo.png" />
      </NavLink>
      <ul className="flex flex-col pt-[10px] pb-[10px] overflow-auto">
        <NavLink to="/dashboard">
          <label>DashBoard</label>
        </NavLink>
        <NavLink to="/events">
          <label>Events</label>
        </NavLink>
        <NavLink to="/Clients">
          <label>Clients</label>
        </NavLink>
        <NavLink to="/tasks">
          <label>Tasks</label>
        </NavLink>
        <NavLink to="/leads">
          <label>Leads</label>
        </NavLink>
        <NavLink to="/subscriptions">
          <label>Subscriptions</label>
        </NavLink>
        <NavLink to="/invoices">
          <label>Invoices</label>
        </NavLink>
        <NavLink to="/orders">
          <label>Orders list</label>
        </NavLink>
        <NavLink to="/store">
          <label>Store</label>
        </NavLink>
        <NavLink to="/payements">
          <label>Payements</label>
        </NavLink>
        <NavLink to="/items">
          <label>Items</label>
        </NavLink>
        <NavLink to="/contracts">
          <label>Contracts</label>
        </NavLink>
        <NavLink to="/contracts">
          <label>Contracts</label>
        </NavLink>
        <NavLink to="/estimate">
          <label>Estimate List</label>
        </NavLink>
        <NavLink to="/estimate_requests">
          <label>Estimate Requests</label>
        </NavLink>
        <NavLink to="/estimate_forms">
          <label>Estimate Forms</label>
        </NavLink>
        <NavLink to="/proposals">
          <label>Proposals</label>
        </NavLink>
        <NavLink to="/notes">
          <label>Notes</label>
        </NavLink>
        <NavLink to="/message">
          <label>Message</label>
        </NavLink>
        <NavLink to="/team_member">
          <label>Team members</label>
        </NavLink>
        <NavLink to="/time_cards">
          <label>Time cards</label>
        </NavLink>
        <NavLink to="/leave">
          <label>Leave</label>
        </NavLink>
        <NavLink to="/timeline">
          <label>Timeline</label>
        </NavLink>
        <NavLink to="/announcements">
          <label>Announcements</label>
        </NavLink>
        <NavLink to="/tickets">
          <label>Tickets</label>
        </NavLink>
        <NavLink to="/expenses">
          <label>Expenses</label>
        </NavLink>
        <NavLink to="/reports">
          <label>Reports</label>
        </NavLink>
        <NavLink to="/files">
          <label>Files</label>
        </NavLink>
        <NavLink to="/help">
          <label>Help</label>
        </NavLink>
        <NavLink to="/help/help_articles">
          <label>Articles</label>
        </NavLink>
        <NavLink to="/help/help_categories">
          <label>Categories</label>
        </NavLink>
        <NavLink to="/knowledge_base">
          <label>knowledge base</label>
        </NavLink>
        <NavLink to="/help/knowledge_base_articles">
          <label>Articles</label>
        </NavLink>
        <NavLink to="/help/knowledge_base_categories">
          <label>Categories</label>
        </NavLink>
        <NavLink to="/settings/general">
          <label>Settings</label>
        </NavLink>
      </ul>
    </div>
  );
}

export default SideBar;
