import {
    Button,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    User,
    cn,
    Divider,
} from "@nextui-org/react";
import { router } from "@inertiajs/react";
// import Dropdown from "@/Components/Dropdown";
export default function AdminNavbar({ user, showSidebar, setShowSidebar }) {
    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";
    return (
        <nav className="bg-light-blue-500  sticky h-fit w-full print:hidden rounded-r-lg    border-r-3 border-black  bg-white   py-6 ">
            <div className="container max-w-full   flex items-center justify-between  md:pl-10">
                <div className="md:hidden pl-3 absolute   border-red left-0">
                    <Button
                        className="bg-transparent border-2 z-10"
                        onClick={() => setShowSidebar("left-10")}
                    >
                        <svg
                            class="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-width="2"
                                d="M5 7h14M5 12h14M5 17h10"
                            />
                        </svg>
                        <span>Menu</span>
                    </Button>

                    <div
                        className={`absolute top-2  md:hidden ${
                            showSidebar === "left-0" ? "left-64" : "-left-64"
                        } z-50 transition-all duration-300`}
                    >
                        {/* <Button
                           className="absolue left-0"
                              onClick={() => setShowSidebar('-left-64')}
                          >
                            
                            
                              {/* <Icon name="close" size="2xl" color="white" />  
                          </Button> */}
                    </div>
                </div>

                <div className="flex justify-end items-center w-full  px-5">
                    {/* <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                          {location === '/'
                              ? 'DASHBOARD'
                              : location.toUpperCase().replace('/', '')}
                      </h4> */}

                    <div className="flex ">
                        <div className=" ">
                            <Dropdown backdrop="blur">
                                <DropdownTrigger>
                                    <User
                                        as="button"
                                        avatarProps={{
                                            isBordered: true,
                                            src: "https://avatar.iran.liara.run/public/boy?username=Ash",
                                        }}
                                        className="transition-transform"
                                        description={user.email}
                                        name={user.name}
                                    />
                                </DropdownTrigger>
                                {/* <Button
                                        startContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                color="#ffffff"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14 9H18"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M14 12.5H17"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <rect
                                                    x="2"
                                                    y="3"
                                                    width="20"
                                                    height="18"
                                                    rx="5"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5 16C6.20831 13.4189 10.7122 13.2491 12 16"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M10.5 9C10.5 10.1046 9.60457 11 8.5 11C7.39543 11 6.5 10.1046 6.5 9C6.5 7.89543 7.39543 7 8.5 7C9.60457 7 10.5 7.89543 10.5 9Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                />
                                            </svg>
                                        }
                                        className="bg-black text-white"
                                    >
                                        {user.name}
                                    </Button>
                                </DropdownTrigger> */}
                                <DropdownMenu
                                    variant="faded"
                                    aria-label="Dropdown menu with icons"
                                >
                                    <DropdownItem
                                        key="profile"
                                        className="h-14 gap-2"
                                    >
                                        <p className="font-bold">
                                            Signed in as
                                        </p>
                                        <p className="font-bold">
                                            {user.email}
                                        </p>
                                    </DropdownItem>

                                    <DropdownItem
                                        key="new"
                                        startContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                color="#000000"
                                                fill="none"
                                            >
                                                <path
                                                    d="M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                />
                                                <path
                                                    d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        }
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </DropdownItem>

                                    <DropdownItem
                                        key="copy"
                                        startContent={
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                color="#000000"
                                                fill="none"
                                            >
                                                <path
                                                    d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                />
                                                <path
                                                    d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        }
                                        // method="post"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            router.post(route("logout"));
                                        }}
                                    >
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
