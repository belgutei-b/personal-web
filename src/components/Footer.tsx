import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex text-blue-300 justify-center mb-2 space-x-4">
        <Link href="mailto:bewlgutei0323@gmail.com">
          <IoIosMail size={28} />
        </Link>
        <Link href="https://www.linkedin.com/in/belgutei0323" target="_blank">
          <FaLinkedin size={28} />
        </Link>
        <Link
          href="https://www.instagram.com/programming.with.bb/"
          target="_blank"
        >
          <FaInstagram size={28} />
        </Link>
      </div>
      <div className="mb-4 text-sm flex justify-center text-slate-500">
        © 2024 Belgutei. All rights reserved
      </div>
    </div>
  );
}
