import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaTelegramPlane,
} from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function SocialLinks() {
  return (
    <div className="p-10 border-t-2">
      <form className=" grid grid-cols-2 gap-8">
        {/* Facebook */}
        <div>
          <label htmlFor="fb">Facebook</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            <FaFacebookF className="text-4xl bg-[#d5e3ee] p-2 rounded-lg" size={28} />
            <input
              type="url"
              placeholder="Enter the URL to your Facebook profile"
              id="fb"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* Twitter */}
        <div>
          <label htmlFor="twitter">Twitter</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            <FaTwitter className="text-4xl bg-[#d5e3ee] p-2 rounded-lg" size={28} />
            <input
              type="url"
              placeholder="Enter the URL to your Twitter profile"
              id="twitter"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* Instagram */}

        <div>
          <label htmlFor="instagram">Instagram</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            <FaInstagram className="text-4xl bg-[#d5e3ee] p-2 rounded-lg" size={28} />
            <input
              type="url"
              placeholder="Enter the URL to your Instagram profile"
              id="instagram"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* YouTube */}
        <div>
          <label htmlFor="youtube">YouTube</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            {" "}
            <FaYoutube
              className="text-4xl bg-[#d5e3ee] p-2 rounded-lg"
              size={28}
            />
            <input
              type="url"
              placeholder="Enter the URL to your YouTube profile"
              id="youtube"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* LinkedIn */}

        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            {" "}
            <FaLinkedinIn
              className="text-4xl bg-[#d5e3ee] p-2 rounded-lg"
              size={28}
            />
            <input
              type="url"
              placeholder="Enter the URL to your LinkedIn profile"
              id="linkedin"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* TikTok */}
        <div>
          <label htmlFor="tiktok">TikTok</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            {" "}
            <FaTiktok
              className="text-4xl bg-[#d5e3ee] p-2 rounded-lg"
              size={28}
            />
            <input
              type="url"
              placeholder="Enter the URL to your TikTok profile"
              id="tiktok"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>
        <div>
          <label htmlFor="telegram">Telegram</label>
          <div className="flex items-center col-span-2 lg:col-span-1 mt-3 bg-white p-3 border-2 border-gray-300 rounded-lg">
            {" "}
            <FaTelegramPlane
              className="text-4xl bg-[#d5e3ee] p-2 rounded-lg"
              size={28}
            />
            <input
              type="url"
              placeholder="Enter the URL to your Telegram profile"
              id="telegram"
              className="w-full px-4  outline-none "
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end col-span-2 pt-10 border-t-[1px]">
          <div className="bg-[#537cd9] w-fit font-semibold text-lg text-white rounded">
            <button
              type="submit"
              className="py-3 px-6 flex gap-x-4 items-center"
            >
              Send Message <TiTick />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
