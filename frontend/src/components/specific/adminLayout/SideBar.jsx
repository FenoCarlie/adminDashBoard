import { Link, NavLink, useLocation } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import React, { useState } from "react";
import { HiMiniChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import {
  FiMonitor,
  FiCalendar,
  FiBriefcase,
  FiCommand,
  FiCheckCircle,
  FiHelpCircle,
  FiLifeBuoy,
  FiPieChart,
  FiFolder,
  FiArrowRightCircle,
  FiMessageCircle,
  FiLayers,
  FiRepeat,
  FiBook,
  FiUsers,
  FiMinus,
  FiShoppingCart,
  FiAnchor,
  FiSettings,
} from "react-icons/fi";

function SideBar() {
  const { translate } = useLanguage();
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = useState({});

  // Définition des groupes avec leurs liens respectifs
  const sidebarLink = [
    { to: "/dashboard", label: translate("dashboard"), icon: <FiMonitor /> },
    { to: "/events", label: translate("events"), icon: <FiCalendar /> },
    { to: "/clients", label: translate("clients"), icon: <FiBriefcase /> },
    { to: "/projects", label: translate("projects"), icon: <FiCheckCircle /> },
    { to: "/tasks", label: translate("tasks"), icon: <FiCommand /> },
    { to: "/leads", label: translate("leads"), icon: <FiLayers /> },
    {
      to: "/subscriptions",
      label: translate("subscriptions"),
      icon: <FiRepeat />,
    },
    {
      title: translate("sales"),
      icon: <FiShoppingCart />,
      links: [
        { to: "/invoices", label: translate("invoices"), icon: <FiMinus /> },
        { to: "/orders", label: translate("orders"), icon: <FiMinus /> },
        { to: "/store", label: translate("store"), icon: <FiMinus /> },
        { to: "/payments", label: translate("payments"), icon: <FiMinus /> },
        { to: "/items", label: translate("items"), icon: <FiMinus /> },
        { to: "/contracts", label: translate("contracts"), icon: <FiMinus /> },
      ],
    },
    {
      title: translate("prospects"),
      icon: <FiAnchor />,
      links: [
        {
          to: "/estimate",
          label: translate("estimate_list"),
          icon: <FiMinus />,
        },
        {
          to: "/estimate_requests",
          label: translate("estimate_requests"),
          icon: <FiMinus />,
        },
        {
          to: "/estimate_forms",
          label: translate("estimate_forms"),
          icon: <FiMinus />,
        },
        { to: "/proposals", label: translate("proposals"), icon: <FiMinus /> },
      ],
    },
    { to: "/notes", label: translate("notes"), icon: <FiBook /> },
    { to: "/message", label: translate("message"), icon: <FiMessageCircle /> },
    {
      title: translate("team"),
      icon: <FiUsers />,
      links: [
        {
          to: "/team_member",
          label: translate("team_members"),
          icon: <FiMinus />,
        },
        {
          to: "/time_cards",
          label: translate("time_cards"),
          icon: <FiMinus />,
        },
        { to: "/leave", label: translate("leave"), icon: <FiMinus /> },
        { to: "/timeline", label: translate("timeline"), icon: <FiMinus /> },
        {
          to: "/announcements",
          label: translate("announcements"),
          icon: <FiMinus />,
        },
      ],
    },
    { to: "/tickets", label: translate("tickets"), icon: <FiLifeBuoy /> },
    {
      to: "/expenses",
      label: translate("expenses"),
      icon: <FiArrowRightCircle />,
    },
    { to: "/reports", label: translate("reports"), icon: <FiPieChart /> },
    { to: "/files", label: translate("files"), icon: <FiFolder /> },
    {
      title: translate("help_and_support"),
      icon: <FiHelpCircle />,
      links: [
        { to: "/help", label: translate("help"), icon: <FiMinus /> },
        {
          to: "/help/help_articles",
          label: translate("help_articles"),
          icon: <FiMinus />,
        },
        {
          to: "/help/help_categories",
          label: translate("help_categories"),
          icon: <FiMinus />,
        },
        {
          to: "/help/knowledge_base",
          label: translate("knowledge_base"),
          icon: <FiMinus />,
        },
        {
          to: "/help/knowledge_base_articles",
          label: translate("knowledge_base_articles"),
          icon: <FiMinus />,
        },
        {
          to: "/help/knowledge_base_categories",
          label: translate("knowledge_base_categories"),
          icon: <FiMinus />,
        },
      ],
    },
    {
      to: "/settings/general",
      label: translate("settings"),
      icon: <FiSettings />,
    },
  ];

  const handleToggleGroup = (title) => {
    setExpandedGroups((prevExpandedGroups) => ({
      ...prevExpandedGroups,
      [title]: !prevExpandedGroups[title],
    }));
  };

  return (
    <div className="sideBar w-60 h-full flex flex-col py-1">
      <span className="flex items-center justify-center w-full h-[59px] z-50 logo">
        <img src="/src/assets/logo/default-stie-logo.png" />
      </span>
      <ul className="flex flex-col overflow-auto">
        {sidebarLink.map((group, index) => (
          <React.Fragment key={index}>
            {group.title && (
              <label
                className={`link ${
                  group.links.some((link) => link.to === location.pathname)
                    ? "active"
                    : ""
                }`}
                onClick={(event) => event.preventDefault}
              >
                <span
                  className="w-full flex flex-row justify-between"
                  onClick={() => {
                    handleToggleGroup(group.title);
                  }}
                >
                  <span className="w-full flex flex-row items-center">
                    {group.icon}
                    <label className="ml-2">{group.title}</label>
                  </span>
                  {expandedGroups[group.title] ? (
                    <HiOutlineChevronUp />
                  ) : (
                    <HiMiniChevronDown />
                  )}
                </span>
              </label>
            )}
            {expandedGroups[group.title] && (
              <ul className="flex pl-4 w-full flex-col">
                {group.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="w-full flex flex-row items-center"
                  >
                    {link.icon}
                    <label className="ml-2">{link.label}</label>
                  </Link>
                ))}
              </ul>
            )}
            {!group.title && (
              <NavLink
                to={group.to}
                className="w-full flex flex-row items-center"
              >
                {group.icon}
                <label className="ml-2">{group.label}</label>
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
