// Project categories for filtering
export const projectCategories = [
  { id: "operations", name: "Operations", lane: "operations" },
  { id: "all", name: "All Projects" },
  { id: "fullstack", name: "Full Stack", filterValue: "Full Stack" },
  { id: "ecommerce", name: "E-commerce", filterValue: "E-commerce" },
  { id: "dashboards", name: "Admin Dashboards", filterValue: "Admin Dashboards" },
  { id: "uiux", name: "UI/UX Projects", filterValue: "UI/UX" },
  { id: "portals", name: "Customer Portals", filterValue: "Customer Portals" },
  { id: "archive", name: "Archive", filterValue: "Archive" },
];

export function projectMatchesCategory(project, category) {
  if (!category) return false;
  if (category.lane) return project.lane === category.lane;
  if (!category.filterValue) return true;
  return project.category === category.filterValue;
}
