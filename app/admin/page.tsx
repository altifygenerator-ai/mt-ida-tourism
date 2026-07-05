import { redirect } from "next/navigation";

export const metadata = {
  title: "Mount Ida Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminIndexPage() {
  redirect("/admin/events");
}
