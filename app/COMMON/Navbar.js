"use client"
// import React from "react";
import next from "next";
import Image from "next/image";
import Link from "next/link";
import location from "../../public/assets/location.png";
import mail from "../../public/assets/mail.png";
import logo from "../../public/assets/logo.png";
// import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import OutsideClickHandler from "react-outside-click-handler";
import letter2 from "../../public/assets/letter2.png";
import letter3 from "../../public/assets/letter3.png";
import aboutimg from "../../public/assets/aboutimg.png";
import layer from "../../public/assets/Layer_1.png";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "About",
    navigate:"/about",
    subpart: [
      {
        title: "Careers",
        navigate: "/career",
      },
      // {
      //   title: "Partner With us",
      //   navigate: "/partner"
      // },
    ],
  },
  {
    title: "Services",
    navigate:"/service",
    subpart: [
      {
        title: "Mobile App Development",
        navigate: "/mobile-application-development",
        subpart: [
          {
            title: "ios",
            navigate: "/ios",
          },
          {
            title: "Anroid",
            navigate: "/android",
          },
        ],
      },
      {
        title: "E-commerce development",
        navigate: "/ecommerce-development",
        subpart: [
          {
            title: "Bigcommerce",
            // navigate: "/bigcommerce-development"
            navigate: "/bigcommerce-development",
          },
          {
            title: "Shopify",
            navigate: "/shopify",
          },
          {
            title: "Magento",
            navigate: "/magento",
          },
          {
            title: "WooCommerce",
            navigate: "/woocommerce",
          },
        ],
      },
      {
        title: "website development",
        navigate: "/web-development",
        subpart: [
          {
            title: "PHP",
            navigate: "/php",
          },
          {
            title: "React.Js",
            navigate: "/react-js",
          },
          {
            title: "HTML5",
            navigate: "/html",
          },
          {
            title: "Node.Js",
            navigate: "/node-js",
          },
          {
            title: "Wordpress",
            navigate: "/wordpress",
          },
          {
            title: "Next.Js",
            navigate: "/next-js",
          },
        ],
      },
      {
        title: "Cross Platform app development ",
        navigate: "/native",
        subpart: [
          {
            title: "React Native",
            navigate: "/native",
          },
          {
            title: "Flutter",
            navigate: "/flutter",
          },
          {
            title: "Kotlin",
            navigate: "/kotlin",
          },
        ],
      },
      {
        title: "Headless commerce",
        navigate: "/headless-commerce",
      },
      {
        title: "Graphic design",
        navigate: "/graphic-design",
        subpart: [
          {
            title: "Adobe Photoshop",
            navigate: "/graphic-design",
          },
          {
            title: "Adobe illustrator",
            navigate: "/graphic-design",
          },
          {
            title: "Coreldraw",
            navigate: "/graphic-design",
          },
        ],
      },
      {
        title: "Digital marketing",
        navigate: "/digital-marketing-agency",
        subpart: [
          {
            title: "SEO",
            navigate: "/seo",
          },
          {
            title: "SMM",
            navigate: "/smm",
          },
          {
            title: "PPC",
            navigate: "/ppc",
          },
        ],
      },
      {
        title: "aPP & WEB DESIGING",
        navigate: "/ui-ux-design",
        subpart: [
          {
            title: "UI & UX Designing",
            navigate: "/ui-ux-design",
          },
        ],
      },
      {
        title: "custom software development",
        navigate: "/custom-software-development",
      },
      // {
      //   title: "multi-level marketing",
      //   navigate: "/multi-level-marketing"

      // },
    ],
  },
  {
    title: "Solutions",
    navigate: "/solutions",
  },
  {
    title: "Industries",
    navigate: "/industries",
  },
  {
    title: "Portfolio",
    navigate: "/portfolio",
  },
  {
    title: "Blogs",
    navigate: "/blog",
  },
  {
    title: "Hire",
    navigate:"/hire",
    subpart: [
      {
        title: "Hire PHP Developer",
        navigate: "/hire/php-developer",
      },
      {
        title: "Hire Laravel Web Developer",
        navigate: "/hire/laravel-developer",
      },
      {
        title: "Hire Node Js Developer",
        navigate: "/hire/nodejs-developer",
      },
      {
        title: "Hire React Js Developer",
        navigate: "/hire/react-js-developer",
      },
      {
        title: "Hire Wordpress Developer",
        navigate: "/hire/wordpress-developer",
      },
      {
        title: "Hire Android Developer",
        navigate: "/hire/android-developer",
      },
      {
        title: "Hire IOS Developer",
        navigate: "/hire/ios-developer",
      },
      {
        title: "Hire Flutter Developer",
        navigate: "/hire/flutter-developer",
      },
      {
        title: "Hire React Native Developer",
        navigate: "/hire/react-native-developer",
      },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const [showmobile, setShowmobile] = useState(false);

  const toggleMenu = () => {
    document.querySelector(".mob-nav2").classList.toggle("mob-nav2-active");
    // setShowmobile(!showmobile);
  };
  const toggleService1 = () => {
    document.querySelector(".ser-nav-mob").classList.toggle("hidden");
  };

  const toggleService2 = () => {
    document.querySelector(".ser-nav-mob1").classList.toggle("hidden");
  };

  const toggleService3 = () => {
    document.querySelector(".ser-nav-mob2").classList.toggle("hidden");
  };

  const [curopen, setcuropen] = useState(false);

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div id="foou">
        <div id="header1" className="overflow-auto w-full">
          <div className="header1-main">
            <header className="header main-header-new">
              <div className="first-header">
                <div className="noida">
                  <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012585/location_vq9szh.png' alt="location" title="location" />
                  <p className="g9fontsize">
                    First Floor, D242, F-32B, Sector 63 Rd, Noida, Uttar Pradesh
                    201301<span>|</span>
                  </p>
                </div>

                <a href="mailto:info@kusheldigi.com">
                  <div className="email">
                    <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012652/mail_fbbpjl.png' alt="mail" title="mail" />
                    <p className="emailinfofont">info@kusheldigi.com</p>
                  </div>
                </a>
              </div>
              <div className="second-header flex items-center nav-right-numver ">
                <a href="tel://+9045301702">
                  <div className="flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#pattern0_3584_1526)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_3584_1526"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_3584_1526"
                            transform="scale(0.0108696)"
                          />
                        </pattern>
                        <image
                          id="image0_3584_1526"
                          width="92"
                          height="92"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                    <p className="ml-2 g9fontsize">+91-9045-301-702</p>
                  </div>
                </a>

                <a href="tel:+15855662070">
                  <div className="flex items-center ">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#pattern0_3584_1530)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_3584_1530"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_3584_1530"
                            transform="translate(-0.455882) scale(0.00735294)"
                          />
                        </pattern>
                        <image
                          id="image0_3584_1530"
                          width="260"
                          height="136"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACICAIAAACObwJKAAAU0klEQVR4Ae1dT2hyVxZ3+9FvmYaQQhoMFKVKtVSE6iZZmUVXQywfNOBjHDFxcJGEQBkkdCMjgW7ETQaSKcFd4Gu/GgiUgUECQ+ExKcjgJpu3EjcBIfs3Zn6d4829z+fV/qG97xQpJ373z+8ez+/+PffcUDZT5c8CGnjz7odvwh/xxyQNhBawA86SzVSZDCbRAG2ZSoZ0qrKA0S+Q69fJskBbspmqDzYmQ1DIkE5Vjg6byUR5LhvK75xYhfpcWVCRj82ppS2GzSrU8zsnamk+3yQT5aPD5jRsTIagkGEjbDnOIL9zMs0UVBtKJsrt9k27fTMXhbZzx8Phw/qapRY47ZuNsDUcPmznjqclUL9fAFs6VRlz23EG0UhRLZCnSeYx4U34I3malE5VopHidu7Ydd1W62p9zUomylubB54GQV/GY6XlpV3HGTjO4OWLV/FYyT/L1uZBMlFeX7NarSvXdbc2D6KR4kziAVs6VZkXWyiUB7blpd14rESwPQVNbDwymMcHmQzd7p37/L/h8MEq1KdZajpVgUFTptHoEcY6bYhIpypWoT4cPlAWCN3unad10pcLYwMk13UhNBqX05qTzVQ1sTEZzCdDNFIUjdu2++lUxcd0splqPFayCnXR4KxC3b8DRoG23Sc+tFpXG+EZk6VfDVs6VZGwqZMlJoP5ZMhmqlubB2SjjcbltA6eOuxsprq6stvr3SNXr3e/urIr/qunnEyUG41LqsifPFRCNFKkLJrY1tcsEZvO+kTCRrWLApPBfDIkE+WL885o9GgV6t3uneMMZnbY2UwVa4xG4xL2rbO6jUaKjjPodu/yOyej0ePFeWcm6whbfucE2NQOW7RXyFhjzIUN+wfjKjDitVpXKrbXb73HH8M0IK8Z0CkmE+V0qrIRthqNS3UpLNk69joxNcKUSd2RlLKAP43G5fqalU5VkomyanBbmwdS1elUBaPBz45NnQc2Gpcb4SdsqFRKkE5V/vO3v/PHMA3IZJBOmiQjyGaqyUTZtvtSlyyuK0QZfXM0Uux27yTL9q8IJqiudEU8ooyKxvzpdu/mwjbe+PJcuIuFizIqSibKNFtjwRgNeJABv7f0/3SqEo+VNsJWrXbmuu5G2IrHSurkQcoVj5XisdL6muW6bq12hlyqbYm5kolyPFZ6+eKVbfdtu4/NUP+KJGzRSFEHGyqKx0r62Agnk8EYAogN0SIDNkO73bvrzq3jDMYnA5CvO7dqf08Wk81Urzu34zTYEnWcAeT9vdNpfMB8CYUDJbK0WlfTsqRTlf2903mxbW0ezItNbBeTQbQhY2QtMmD/FGMCtXw4fPA/ok6nKjhgpizog/27ecxbxCzXnduZWVRs27njafzBDM0Tm+amFpNB/IGMkXXJAD4cHTap5asruz7WRv1oKJSnLEeHTR1re/niFZ2vdbt3L1+8otKmCfFYScSGdfm0xPgeq/B5sSEvk4H0ZpIwHxlgo9edW9d11S0j1fiw0eS6LrKoq1s1SzZTxWFCr3eP8wH/YQElYI1OFdVqZzOJuhg2JoNJ1i+1ZSoZVGNKJsq93n06VVlfs44Om+rsRd1HSibK153bo8MmDitsu69av1RROlWp1c7a7Zv1NWsjbF13blXLlrKgTBT+U7CpxarfMBkkAzLpT28yeG78Y18V1qDaPRaynsMFmZTq8wfXJrXvp29IIBbh6E2absG7jrBRYvrm6LDpuXD3wYaKVADQg0lGwG2BBmQywMo3whYOoXH6JtmW9CeyRCNF7M/A/5SMTEpMf+KszSrUXdfF8kMnSzpVWV3ZdV3XKtR/BWyj0SMdvRFyJoOp5HlGhq3Ng/29U6tQx+bMeCPVKtT39059rsVgQECa4fBhNHrM75zs7516dsNkT0hjFeq0/LAK9aPDps9G7dbmwdFhE8mwNpiJLZupAgk8PrD9hW8IiSpI2Gq1MxUbL6CN5MMzMqRTlXb7Rmpnr3evOlOQDWEZSi6ryDsaPXrOlyjXdu6YnOeounb7xmdwWBgbla+JbWvzQAfbdXqLP4Zp4BkZsJODqQtM5+K8M9NRDxMeHMaNJzCOM9CZwGyErYvzDllqfudEcqMg5pAQj5XyOyeURRPb2F2KsPV69zrY1tcssVPw9Ej/5p0PnhxX+WOQBmQy4Loj3YPRcSbNZqq4igkz1bzGGY+VQAaMKv5nZMQHuMciS7t9Iy2jKZkorK7s0kWi4fBhJrexJAAZUJHn2SK7cAfChbvdvul27+CyOhw+qB22NJmBswZWC5idqzfjpCw4whsOH+Acatt9daNWNGjI2Ki17f762pM77XD4oJJBrQiQ8jsn+tjW156uWRM2z4vdTAbzyYAFMQgAf2xpwZBMlNXFMYJiYFsJ3BBNGd9IZrqdO6bpx0bYUsvM75xIVQMbunZgkxbcnhXt751iagR4UvwOzyxbmwf+2DgggHlM8AgIIHlWizYNeWwoPjEj1PSYRDnOwH8iJFEFe/zqJE1KJlYHV6he715nIkQZo5Eidgj8S6b0JPDIYB4f5DUD/diSgMgUqyu7uMsGd251liLlQjJsRDYal6sru+qkS8qCihDPote7D4XyOoEzopEiYYPT0UxsyUQZZwiu6xI2H0pIOJkMASUD5hKItoI15XD4MBw+eF7ZEY3GtvtIiRU5SlBXFJQFJ9/jeBy0/+M4g+Hwwd+F2yrUF8DW7d7NhY1AQmAyBJQM5PNMNopjr5m9L5yLaDN05mQJe7uSP3atduY/nmCCNC82HJnPhU3kA5MhuGTAhqNopjOZANOB9wRsrlY783T1EY0sm6kuL+1SpBbb7mvG2lgAm3iQrImNoL5+672v336fPyZpQHfNQOtgxxng5oBOpBZMe+Dv7TgDzdUt4llcnHew2S9tGZE5igLiWfR696CEJjasf8ZeHvrYUGk6Vfn3X7/kj2EamIMM2Uy13b5ZXdmF86m61YOYS6KNIsgpRhUcOc+0bLhwHx02o5FiNFKs1c78PTtQ3XbuGAfSPthEYIB0cd6Bu+tG+OnIeSY2KkEcUmiixcLvXQPeZIjHStedW/rtSRAnOdLGC4xYjWchZhFllJlOVbrdO2nGhQMBSiBVhHuhUhYYN+GUsiDWhv+9CE9s151btSLU9Xv/4Rm/qgGZDMlEOZko464ZuueZzjzwTVpd2R1vLnW7d4hVLJkjmSmZOGrBjGt56Wm0Uc1RyoU0y0tPLtyETUoj/Qls62uWPjbYejRSBLZopKhi45FBtSQDvnlGhq3Ng4vzDk3We737Vuuq3b7x2QxFp9tu37RaV6PR42j0iCzqEEFmio1aZIF/aLt9g3p9Jio/F7aL844PNgQenomNyWCA6atNeEYGT39sf89qxMaTfJ79vb6xUSu6heIUwn9tQFeWxTYsjM1n4MI6R6xF9UhnMoj6MUZ+RgbMENKpCk7WKLoWderTBGkzdHlpduBhikcGVeocM+NwmlSPqGTTINH3KjYfJiCXiG00esRciwrkNQP9BIYJMhngDOe6Lnb6p60gRcuAC+po9EgnxzreQXTmhYpURz2pCownuGsxFzasMXDYPBo9ei6Ipbqwf+C6LkY8FRuPDIbRAM2RyQA7aLWulpd28Y6Tuq6VelZMYGy7j2CStt1XJzxSFlh2r3ef3zlZXtptta50XLgXw7a/dzovNkQI98HGZAgEGbAGAAFgwdKiNh4rqQvQ7dwx9bjxWEl1va7VzqTeF8WiimSiLGXBQlZyt56JDdu7EvG2c8fkzTENm0T4mdiYDEEhg2S14p+4B6d5X4wyrq7s4uqPZKaUQBXisVK7faM5SUP2xbBFI0X/d7pUbLxmMJIJruvK0yTP3x5Hy3iGELtAuJygPqEgZse/0j3SdvtmHPfOPwv6/mymirtmxDp13FArAn9c18UtzZkVbW0eiNjwKKM0DIq1SPI//vAZfwzTgC4Z8jsndJOYOgbPlw3IaHC6TIkhIF4LpZEEnFpIWXDfwGdUWQDbmN4UzpWq88cmQf367fe/eecD/pikAV0yIKokwhzBenR2NhHskaztunOL+zSSYYl/Yv1A/tjjp67EaHliSpJxm2debOL+KTzSZ2KjGvnap3n+297XPsWfXJTJBRXGrT+jIDKob1WJ5ZOMJ6WRy3EGmk8Sio+U+k+rqCLxKUdNbJSX7zOYxwfdkYHiwSBAi+MMPGNGkK1AwGkuIimN3To0L08jOBJC32ENIBWr/olYNYA0LzaEJ6P1iVq45zdMhgCRQQ0WhACP2KaEc7U0j9/aPJC6ZOx14gwOrm9SgmymKsWuxKnfdu4Y7nHbuWP1zEvFtp07huse3ZWTsG3njqWhDNioOUeHTQkblteeTOBpknlMmDpNikaKtt2XjAMnZWQckrVhEqVONsRkokzlqDd+pGTSn4hnIX35S2BDnEk6oyDAEHhkMI8P8jTJM56FanmiZcAZOxTK43kRxLOQjrHE9DBcMZ4FnmKgYzspMf0JbLhHWqudIdbGXNhevngFl2wqUxU044AwGQwnw3hvvtu9oydzhsMH2+73evfqRIVsCA8s9Hr34q1l+H5P4wMmQsiC7VrU6B9r4+fFNo1CcC/XwcZkMJwM45MBKQb1aPSIiHRk/aqAgF+0ZeS67sV5x7+bR1g+8o2FS5xasvTNAtgooivB87ytKlakYrPtPk7oxGQmXYTntkAD8jRJdZP2N2vYh+omLdqNpxyPlcR4FjohMBA4g8y6VjtbAJtORRI21b08nar86/Av/DFMAx5kgI22WleYJk1bQUomjsehcaw7bYIkZsEaHQHCcHFi2tSFcmH/x3Vd3Kqz7b4ONjzJjmufruvOrAX7Ub3evQ82dtSjLskkQSYDTgasQh0LTc+wAJI9wUZbrauN8NOThK3Wlf/Vexg3niXH4htP+KgUkioCNrzkgLAAxJNpwmLYxiE2EKZg7MttFerqiQqTwSQOUFtkMmCrh6xQfZIwGimqxgFHTlikatMwYtVeKaUYDgPJcEfC816EiE0tczFsVCYK3No8oAmYio29Vsl6DBM8yKBaGBkoLS49n/1TM8KScNdsricJN8JP8SzIl0kyVs+KCBteRNfJggUSbRLMzEL18shgGA3QHF0yWIV6o3E5foMQq4JG47JWO2s0LtWDObKYrc0DZIHXULd7d3TYxHuBlEYSMKtB4DDE2kAWdd4lZpSwYZ7mj207d0xNwGrn6LDZaFyq14nEikhmMgSaDJ7+2OqVNzIXzCUQv1FU3Eyvb6tQF7dcXdfVuXyj+mP7R5hMJsqe2DQHByaD+JsaI+uODLhwI3qGzvSsBh8QOBX6ajQuZ7qg4qVnij3T693jlWiRZqqMh63oV4Frk5pM/AZXQCmLDjbKzmQgvZkkzEEGukqGY2PVW45shQQc6KJ314xin81UcU0U4wOeJacCpwkUzwLYfKKeUQl0zQ1ZNJ9LRHYmg0kcoLZMJYM6YcB14f2905cvXl13bnUuKONJwuvO7csXrxDsmnaQRKMkGXtZSAkAjjNQnUGmYTs6bBK2mRWBPyI29dRCrYjJQKZjnuBNBuxsSvYED218iSeZRSOGM7a0AEXvi21KXGFTF9zq/ml+54R2NpOJsurjfXTYlLDBQ1vEJtmxVahL5QCwiE3y8U4myio2JoN5HKAWeZMBzx3oTISIDzhM8NzmpzSqsJ07nvdWDe7xSIYrlSwxAd5T82JD2Ch1uEBd3T/+mT+GaUAmQzxWGsesxn1IhBKbZg1kf7iCjCcJHWcQCuV1LhNHI0WED4OLBGJ3U5meQjJRRjJ4ZCwvaT2XuBG2fgo27BxIA1E2U/2tObd9884HvzVIvwSeX7SZMhnIE5vGjtHo0Wc9Kl2MplzqLR+yb6yqsWyl9AhoSWk8BRWb/64r3MvFKiDPfC5R2tv1xMYu3Ia7cMNH7eK8QwZk233pEplqpvFYaX/vlAwIB7o06VfTU4GicePdHc/E9GU0UlwAm3hwoYktnarQ3i480tXhkclgPhlgeUQG/6MrMtPVlV2yHpwM0D9NE6RjL3/yUCF4RQXwNLGtr1kitpkHHepxIdUuCkwG88mAaQ+mRrbdd5yBTkjt7dwxQn3hWNd/dQuTQnDfcRXouX2mVWSCIrZu904z1gZO/RqNS2BTt7OofBKwfzCuwgcbkyEoZMBMBv7YMy0b+7D7e6eIwm0V6tN2JMnaEEay0bgkhz+feTzlwhoAzn9zYbMKdWDb3zvVwZbNVOGRjro8sTEZzCcDTehhguouCpmmKIh+zqIsplFlcQNUsyIxmSirhdM3Ih5RpgSegli4KFNiJkMgyEC/Nws+GmAyGEgGdJb8/3k1wIGHTQo5jLaEEMWR/z+vBv752Z/4Y5gGQrSLygJrIOAaYDIE3AC4+RMNMBkmumAp4BpgMgTcALj5Ew0wGSa6YCngGmAyBNwAuPkTDTAZJrpgKeAaYDIE3AC4+RMNMBkmumAp4BpgMgTcALj5Ew2Evv/8C/6wBlgD33/+ReiXuLXNZbIGfo8aCJnniMstYg0spgEmw0eLKY5zmacBJgOTgTXwowaYDGwKrAEmQ5iNgDXwTAM8MjxTh3nzYG6RvgaYDEwG1sCPGgiZd62bW8QaWEwDoe8++ZQ/rAHWwHeffMq+SRPXFJYCrgEmQ8ANgJs/0QCTYaILlgKuASZDwA2Amz/RAJNhoguWAq4BJkPADYCbP9EAk2GiC5YCrgEmQ8ANgJs/0QCTYaILlgKuASZDwA2Amz/RQOiHL5v8YQ2wBn74shl6/dZ7/GENsAZev/Ueu3CzAzNr4P8u3PpXHzgla8BsDfDIwP0ia4BHBr4DzRp4rgEeGbhfZA3wyPC8VzB7Nsyt09EAjwzcL7IGaGR498M3/GENsAbe/TD0bfxj/rAGWAPfxj9m36SJawpLAdcAkyHgBsDNn2iAyTDRBUsB1wCTIeAGwM2faIDJMNEFSwHXAJMh4AbAzZ9ogMkw0QVLAdcAkyHgBsDNn2iAyTDRBUsB1wCTIeAGwM2faCDU/6rNH9YAa6D/VZsDAnA8BNbAjxpgF252YGYNkAs333FhDbAG/qcBHhm4X2QN8MjA3SFr4LkGeGTgfpE1wCPD815B58I4pzFbAzwycL/IGuCRgUcG1sBzDfwXawjsEX+mpZMAAAAASUVORK5CYII="
                        />
                      </defs>
                    </svg>
                    <p className="ml-2 g9fontsize">+1-585-566-2070</p>
                  </div>
                </a>
              </div>
            </header>
          </div>
        </div>

        <div id="hand" className="navigation">
          <div className="navigation1-main">
            <nav className="navbar">
              <Link href="/">
                <div className="logo">
                  <img
                    className="kdssslogo"
                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png'
                    alt="KushelDigi Solutions Logo"
                    title="KushelDigi Solutions Logo" />
                </div>
              </Link>

              <div className="navbar-text desk-nav">
                <ul>
                  <li className="mar">
                    <div className="flex items-center cursor-pointer nb-0 navLinks">
                    <Link
                        className="sar descfont textTransform-navbar"
                        href="/about"
                      >
                        About-us
                      </Link>
                      <div className="ser-nav10 hidden megaMenu">
                        <div className="compan flex items-start justify-between compan1">
                          <div className="first-compan mt-5 flex items-start justify-evenly">
                            <div className="second-compan mr-10">
                              <Link href="/career">
                                <div className="flex items-center">
                                  <img
                                    className="timi11"
                                    src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012730/letter3_gkhx9s.png'
                                    alt="lee"
                                    title="lee"
                                  />
                                  <p>Careers</p>
                                </div>
                              </Link>
                              {/* <NavLink to="/partner">
                                <div className="flex items-center mt-4">
                                  <img
                                    className="timi11 timi23"
                                    src={letter2}
                                    alt="letter"
                                    title="letter"
                                  />
                                  <p className="cpmpa ">Partner With us</p>
                                </div>
                              </NavLink> */}
                            </div>
                            <div className="second-compan mr-5"></div>
                          </div>
                          <div className="second-compan112">
                            <div className="comapn-sect">
                              <img
                                src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012802/aboutimg_ex5zsk.png'
                                alt="about hover image"
                                title="about hover image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mar">
                    <div className="flex items-center cursor-pointer nb-0 navLinks">
                      <Link
                        className="sar descfont textTransform-navbar"
                        href="/service"
                      >
                        Services
                      </Link>
                    </div>
                    <div className="ser-nav hidden  megaMenu">
                      <div className="servise-dropdown-main">
                        <div className="servise-dropdown-container">
                          <div className="left-service-drop">
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/mobile-application-development">
                                  <span>Mobile App Development </span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/ios">iOS </Link>
                                <span>|</span>
                                <Link href="/android">Android </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/ecommerce-development">
                                  <span>E-Commerce Development </span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/bigcommerce-development">
                                  BigCommerce{" "}
                                </Link>
                                <span>|</span>
                                <Link href="/shopify">Shopify </Link>
                                <span>|</span>
                                <Link href="/magento">Magento </Link>
                                <span>|</span>
                                <Link href="/woocommerce">WooCommerce </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/web-development">
                                  <span>Website Development </span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/php">PHP </Link>
                                <span>|</span>
                                <Link href="/react-js">React.Js </Link>
                                <span>|</span>
                                <Link href="/html">HTML5 </Link>
                                <span>|</span>
                                <Link href="/node-js">Node.Js </Link>
                                <span>|</span>
                                <Link href="/wordpress">Wordpress </Link>
                                <span>|</span>
                                <Link href="/next-js">Next.Js </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/native">
                                  <span>Cross Platform App Development</span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/native">React Native </Link>
                                <span>|</span>
                                <Link href="/flutter">Flutter </Link>
                                <span>|</span>
                                <Link href="/kotlin">Kotlin </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="headless-commerce">
                                  <span>Headless Commerce</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="right-service-drop">
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/graphic-design">
                                  <span>Graphic Design </span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/graphic-design"> Adobe Photoshop</Link>
                                <span>|</span>
                                <Link href="/graphic-design"> Adobe illustrator</Link>
                                <span>|</span>
                                <Link href="/graphic-design">Coreldraw</Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/digital-marketing-agency">
                                  <span>Digital Marketing </span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/seo">SEO </Link>
                                <span>|</span>
                                <Link href="/smm">SMM </Link>
                                <span>|</span>
                                <Link href="/ppc">PPC </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services">
                                <Link href="/ui-ux-design">
                                  <span>App & Web Designing</span>
                                </Link>
                              </div>
                              <div className="left-containt-services">
                                <Link href="/ui-ux-design">UI & UX Designing </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services left-head-services-bootom">
                                <Link href="/custom-software-development">
                                  <span>Custom Software Development</span>
                                </Link>
                              </div>
                            </div>
                            <div className="left-side-servises-containt">
                              <div className="left-head-services left-head-services-bootom">
                                {/* <Link href="/multi-level-marketing">
                                  <span>Multi-Level Marketing</span>
                                </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <Link href="/solutions">
                    <li className="mar">
                      <div className="flex items-center cursor-pointer">
                        <p className="sar textTransform-navbar descfont" to="">
                          Solutions
                        </p>
                      </div>
                    </li>
                  </Link>

                  <li className="mar">
                    <div className="flex items-center cursor-pointer">
                      <Link
                        className="sar textTransform-navbar descfont"
                        href="/industries"
                      >
                        Industries
                      </Link>
                    </div>
                  </li>

                  <li className="mar">
                    <div className="flex items-center cursor-pointer">
                      <Link
                        className="sar descfont textTransform-navbar"
                        href="/portfolio"
                      >
                        Portfolio
                      </Link>
                    </div>
                  </li>

                  <li className="mar">
                    <div className="flex items-center cursor-pointer">
                      <Link
                        className="sar descfont textTransform-navbar"
                        href="/blog"
                        //  target="_blank"
                      >
                        Blogs
                      </Link>

                      {/* <NavLink className="sar descfont textTransform-navbar" to="/blog">
                        Blogs
                      </NavLink> */}
                    </div>
                  </li>

                  {/* <Link  href="/hire"> */}
                  <li  className="mar" style={{ position: "relative" }}>
                      <div onClick={() => router.push("/hire")} className="flex items-center cursor-pointer nb-0 navLinks">
                        <p className="sar descfont textTransform-navbar" to="">
                          Hire
                        </p>
                      </div>

                      <div className="hire-nav  hidden megaMenu">
                        <div className="hire-dropmenu-main">
                          <div className="hired-left">
                            <div className="dummy">
                              <Link href="/hire/php-developer">
                                <span>Hire PHP Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              {" "}
                              <Link href="/hire/laravel-developer">
                                <span>Hire Laravel Web Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              {" "}
                              <Link href="/hire/nodejs-developer">
                                <span>Hire Node Js Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              {" "}
                              <Link href="/hire/react-js-developer">
                                <span>Hire React Js Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              <Link href="/hire/wordpress-developer">
                                <span>Hire Wordpress Developer</span>
                              </Link>
                            </div>
                          </div>
                          <div className="hired-right">
                            <div className="dummy">
                              {" "}
                              <Link href="/hire/android-developer">
                                <span>Hire Android Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              <Link href="/hire/ios-developer">
                                <span>Hire IOS Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              <Link href="/hire/flutter-developer">
                                <span>Hire Flutter Developer</span>
                              </Link>
                            </div>
                            <div className="dummy">
                              {" "}
                              <Link href="/hire/react-native-developer">
                                <span>Hire React Native Developer</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  {/* </Link> */}
                  <li className="mar">
                    <Link className="bts-naba" href="/contact-us">
                      <button className="sar contactusbtns tart">
                        Contact Us
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>

              {toggle ? (
                <RxCross2
                  onClick={() => setToggle(false)}
                  className="crossfsfs hideit"
                />
              ) : (
                <IoReorderThreeOutline
                  onClick={() => setToggle(true)}
                  className="sadoefndsfs hideit"
                />
              )}

              {/* THIS IS FOR MOBILD  */}
            </nav>

            {toggle && (
              <div className={`removethisdiv   ${toggle ? "active" : ""}`}>
                <div className="smallnavwrap">
                  {data?.map((item, index) => (
                    <div key={index} className="topnavbar2">
                      <div className={`topnavdeail`}>
                        <p
                          onClick={() => {
                            if (item?.subpart?.length > 0) {
                              router.push(item.navigate);
                            } else {
                              router.push(item.navigate);
                              setToggle(false);
                              document
                                .querySelector(".mob-nav2")
                                .classList?.toggle("mob-nav2-active");
                            }
                          }}
                          className={` cursor-pointer ${
                            curopen === index && "curopensf"
                          }`}
                        >
                          {item?.title}
                        </p>
                        {item?.subpart?.length > 0 &&
                          (curopen === index ? (
                            <FiMinus
                              onClick={() => {
                                setcuropen(false);
                              }}
                              className="cursor-pointer"
                            />
                          ) : (
                            <FiPlus
                              className="cursor-pointer"
                              onClick={() => {
                                setcuropen(index);
                              }}
                            />
                          ))}
                      </div>

                      {curopen === index && (
                        <div className="midnavbar2">
                          {item?.subpart?.map((item2, index2) => (
                            <div key={index2} className="singmidnav">
                              <h4
                                onClick={() => {
                                  if (item2?.subpart?.length > 0) {
                                    router.push(item2.navigate);
                                    setToggle(false);
                                    document
                                      .querySelector(".mob-nav2")
                                      .classList?.toggle("mob-nav2-active");
                                  } else {
                                    router.push(item2.navigate);
                                    setToggle(false);
                                    document
                                      .querySelector(".mob-nav2")
                                      .classList?.toggle("mob-nav2-active");
                                  }
                                }}
                                className="sinh4 cursor-pointer"
                              >
                                {item2?.title}
                              </h4>
                              {item2?.subpart && (
                                <div className="botmnavitms">
                                  {item2?.subpart?.map((item3, index3) => (
                                    <p
                                      onClick={() => {
                                        router.push(item3.navigate);
                                        setToggle(false);
                                        document
                                          .querySelector(".mob-nav2")
                                          .classList?.toggle("mob-nav2-active");
                                      }}
                                      key={index3}
                                      className="cursor-pointer"
                                    >
                                      {item3?.title} |{" "}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
