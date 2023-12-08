import { Button, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import Dropdown from '@/Components/Dropdown';
export default function AdminNavbar({user, showSidebar, setShowSidebar }) {
   
 
  
      return (
          <nav className="bg-light-blue-500   bg-white  z-50 md:ml-64 py-6 px-3">
              <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                  <div className="md:hidden">
                      <Button
                    
                      
                          onClick={() => setShowSidebar('left-0')}
                      >
                          {/* <Icon name="menu" size="2xl" color="white" /> */}
                      </Button>
                      <div
                          className={`absolute top-2 md:hidden ${
                              showSidebar === 'left-0' ? 'left-64' : '-left-64'
                          } z-50 transition-all duration-300`}
                      >
                          <Button
                           
                              onClick={() => setShowSidebar('-left-64')}
                          >
                              {/* <Icon name="close" size="2xl" color="white" /> */}
                          </Button>
                      </div>
                  </div>
  
                  <div className="flex justify-end items-center w-full  px-10">
                      {/* <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                          {location === '/'
                              ? 'DASHBOARD'
                              : location.toUpperCase().replace('/', '')}
                      </h4> */}
  
                      <div className="flex ">
          
  
                          <div className=" ">
                        
      
                                                  <Dropdown>
                                    <Dropdown.Trigger>
                                  <span className="inline-flex rounded-md">
                                      <button
                                              type="button"
                                              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                           >
                                                {user.name}

                                             <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                     fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                             </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                   <Dropdown.Content>
                                   <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                       <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                   </Dropdown.Content>
                                </Dropdown>
     
                          </div>
                      </div>
                  </div>
              </div>
          </nav>
      );
  }
  