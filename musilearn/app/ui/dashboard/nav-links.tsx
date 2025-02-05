"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const teacherLinks = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

const adminLinks = [
  { name: "Users", href: "/admin/users", icon: HomeIcon },
  {
    name: "Reports",
    href: "/admin/reports",
    icon: DocumentDuplicateIcon,
  },
];

const studentLinks = [
  { name: "Home", href: "/student", icon: HomeIcon },
  {
    name: "Course",
    href: "/student/courses",
    icon: DocumentDuplicateIcon,
  },
  { name: "progress", href: "/student/progress", icon: UserGroupIcon },
];

export default function NavLinks({
  role,
}: {
  role: "teacher" | "student" | "admin";
}) {
  const pathname = usePathname();
  let links;
  if (role === "admin") links = adminLinks;
  else if (role === "student") links = studentLinks;
  else links = teacherLinks;

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
