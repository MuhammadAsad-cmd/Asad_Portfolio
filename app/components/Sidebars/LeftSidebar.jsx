import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TfiLinkedin } from "react-icons/tfi";

const LeftSidebar = () => {
  return (
    <>
      <div className="p-[30px]">
        <h1 className="mt-4 flex justify-between border-b-2 border-SkyBlue pb-8 text-center text-4xl font-medium tracking-widest text-lightPrimarytext dark:text-neutral-200">
          <span>Get</span> <span>in</span> <span>touch</span>
        </h1>
        <div className="mb-[30px] pt-6">
          <p className="mb-6 text-base leading-[26px] tracking-widest text-lightPrimarytext dark:text-neutral-200">
            I&apos;m always excited to take on new projects and collaborate with
            innovative minds.
          </p>

          <div className="mb-4 text-base leading-[26px]">
            <p className="capitalize tracking-widest text-gray-900 dark:text-gray-400">
              Phone Number
            </p>
            <Link
              href="tel:+923059971189"
              title="Call Muhammad Asad"
              className="text-gray-700 dark:text-gray-200"
            >
              +92 305 9971189
            </Link>
          </div>

          <div className="mb-4 text-base leading-[26px]">
            <p className="capitalize tracking-widest text-gray-900 dark:text-gray-400">
              Whatsapp
            </p>
            <Link
              href="https://wa.me/+923193148320"
              target="_blank"
              title="Chat on WhatsApp"
              className="text-gray-700 dark:text-gray-200"
            >
              +92 319 3148320
            </Link>
          </div>

          <div className="mb-4 text-base leading-[26px]">
            <p className="capitalize tracking-widest text-gray-900 dark:text-gray-400">
              Email
            </p>
            <Link
              target="_blank"
              href="mailto:189asadali@gmail.com"
              title="Send email to Muhammad Asad"
              className="text-gray-700 dark:text-gray-200"
            >
              189asadali@gmail.com
            </Link>
          </div>

          <div className="mb-4 text-base leading-[26px]">
            <p className="capitalize tracking-widest text-gray-900 dark:text-gray-400">
              Address
            </p>
            <p className="text-gray-700 dark:text-gray-200">Lahore, Pakistan</p>
          </div>

          <div className="mb-4 text-base leading-[26px]">
            <p className="capitalize tracking-widest text-gray-900 dark:text-gray-400">
              Social
            </p>
            <div className="mt-1 flex items-center gap-4 text-xl">
              <Link
                href="https://www.linkedin.com/in/masadali/"
                target="_blank"
                aria-label="LinkedIn profile"
                title="LinkedIn - Muhammad Asad"
                className="duration-300 ease-in-out hover:text-SkyBlue"
              >
                <TfiLinkedin />
              </Link>
              <Link
                href="https://github.com/MuhammadAsad-cmd"
                target="_blank"
                aria-label="GitHub profile"
                title="GitHub - Muhammad Asad"
                className="duration-300 ease-in-out hover:text-SkyBlue"
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href="https://www.upwork.com/freelancers/~01a30bffb100551bb2?mp_source=share"
                aria-label="Upwork profile"
                title="Upwork Freelancer Profile"
                className="duration-300 ease-in-out hover:text-SkyBlue"
              >
                <SiUpwork />
              </Link>
              <Link
                href="https://www.instagram.com/muhammadasad9017"
                target="_blank"
                aria-label="Instagram profile"
                title="Instagram - @muhammadasad9017"
                className="duration-300 ease-in-out hover:text-SkyBlue"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100071035773905"
                target="_blank"
                aria-label="Facebook profile"
                title="Facebook - Muhammad Asad"
                className="duration-300 ease-in-out hover:text-SkyBlue"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
