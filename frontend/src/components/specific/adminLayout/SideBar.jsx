import { Link, NavLink } from "react-router-dom"; // Assurez-vous que votre version de react-router-dom est compatible avec React Router v6
import { useLanguage } from "../../../contexts/LanguageContext";
import React from "react";

function SideBar() {
  const { translate } = useLanguage();

  // Définition des groupes avec leurs liens respectifs
  const sidebarLink = [
    { to: "/dashboard", label: translate("dashboard") },
    { to: "/events", label: translate("events") },
    { to: "/clients", label: translate("clients") }, // "Clients" modifié en "clients"
    { to: "/tasks", label: translate("tasks") },
    { to: "/subscriptions", label: translate("subscriptions") },
    {
      title: translate("sales"),
      links: [
        { to: "/invoices", label: translate("invoices") },
        { to: "/orders", label: translate("orders") },
        { to: "/store", label: translate("store") },
        { to: "/payments", label: translate("payments") },
        { to: "/items", label: translate("items") },
        { to: "/contracts", label: translate("contracts") },
      ],
    },
    {
      title: translate("prospects"),
      links: [
        { to: "/estimate", label: translate("estimate_list") },
        { to: "/estimate_requests", label: translate("estimate_requests") },
        { to: "/estimate_forms", label: translate("estimate_forms") },
        { to: "/proposals", label: translate("proposals") },
      ],
    },
    { to: "/notes", label: translate("notes") },
    { to: "/message", label: translate("message") },
    {
      title: translate("team"),
      links: [
        { to: "/team_member", label: translate("team_members") },
        { to: "/time_cards", label: translate("time_cards") },
        { to: "/leave", label: translate("leave") },
        { to: "/timeline", label: translate("timeline") },
        { to: "/announcements", label: translate("announcements") },
      ],
    },
    { to: "/tickets", label: translate("tickets") },
    { to: "/expenses", label: translate("expenses") },
    { to: "/reports", label: translate("reports") },
    { to: "/files", label: translate("files") },
    {
      title: translate("help_and_support"),
      links: [
        { to: "/help", label: translate("help") },
        { to: "/help/help_articles", label: translate("help_articles") },
        { to: "/help/help_categories", label: translate("help_categories") },
        { to: "/help/knowledge_base", label: translate("knowledge_base") },
        {
          to: "/help/knowledge_base_articles",
          label: translate("knowledge_base_articles"),
        },
        {
          to: "/help/knowledge_base_categories",
          label: translate("knowledge_base_categories"),
        },
      ],
    },
    { to: "/settings/general", label: translate("settings") },
  ];

  return (
    <div className="sideBar w-60 h-full flex flex-col py-1">
      <NavLink
        to="/"
        className="flex items-center justify-center w-full h-[59px] z-50 logo"
      >
        <img src="/src/assets/logo/default-stie-logo.png" />
      </NavLink>
      <ul className="flex flex-col pt-[10px] pb-[10px] overflow-auto">
        {/* Affichage des groupes spécifiques */}
        {sidebarLink.map((group, index) => (
          <React.Fragment key={index}>
            {group.title && <li className="mt-4 mb-2">{group.title}</li>}
            {group.links ? (
              group.links.map((link, idx) => (
                <Link key={idx} to={link.to}>
                  {" "}
                  {/* Assurez-vous que "nav-link" est correctement défini dans vos styles */}
                  {link.label}
                </Link>
              ))
            ) : (
              <NavLink to={group.to}>
                {" "}
                {/* Assurez-vous que "nav-link" est correctement défini dans vos styles */}
                {group.label}
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
