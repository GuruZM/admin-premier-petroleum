import { Button, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import Dropdown from '@/Components/Dropdown';
export default function AdminNavbar({user, showSidebar, setShowSidebar }) {
   
 
  
      return (
          <nav className="bg-light-blue-500 print:hidden  bg-white  z-50 md:ml-64 py-6 px-3">
              <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                  <div className="md:hidden pl-3 absolute   border-red left-0">
                      <Button
                    
                      className="bg-transparent border-none"
                          onClick={() => setShowSidebar('left-0')}
                      >
                       <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 17.75c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm5.526-8.828s.501.505 2.254 2.259c.147.147.22.339.22.53 0 .192-.073.384-.22.531-1.752 1.753-2.254 2.258-2.254 2.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.53-.221-.293-.293-.295-.766-.004-1.057l.977-.978h-4.693c-.414 0-.75-.336-.75-.75 0-.413.336-.75.75-.75h4.693l-.978-.978c-.289-.289-.287-.762.006-1.055.147-.146.339-.22.53-.221s.38.071.525.215zm3.474 4.828c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm0-4c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-4c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75z"/></svg>
                          {/* <Icon name="menu" size="2xl" color="white" /> */}
                      </Button>
                      <div
                          className={`absolute top-2  md:hidden ${
                              showSidebar === 'left-0' ? 'left-64' : '-left-64'
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
  