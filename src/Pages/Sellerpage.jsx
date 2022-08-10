import React from 'react';
import styles from "./Sell.module.css";
import {Box, Flex, Heading} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {ChevronRightIcon} from "@chakra-ui/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCar,faBuilding, faMobileButton, faBriefcase, faMotorcycle, faDisplay, faTruckPlane, faCouch, faShirt, faGuitar, faShieldDog, faBellConcierge} from "@fortawesome/free-solid-svg-icons";
const Sellerpage = () => {
  const showBox=(menu)=>{
    let carbox=document.getElementById("auto");
    let propertybox=document.getElementById("property");
    let mobilebox=document.getElementById("mobile");
    let jobbox=document.getElementById("job");
    let bikebox=document.getElementById("bike");
    let abox=document.getElementById("appliance");
    let sparebox=document.getElementById("spare");
    let fbox=document.getElementById("furniture");
    let fashionbox=document.getElementById("fashion");
    let bookbox=document.getElementById("book");
    let petbox=document.getElementById("pet");
    let sbox=document.getElementById("service");
    if(menu==="auto"){
    
      carbox.style.display="block";
    }
    else{
      carbox.style.display="none";
    }
    if(menu==="property"){
      
        propertybox.style.display="block";
      }
      else{
        propertybox.style.display="none";
      }
    if(menu==="mobile"){
        
          mobilebox.style.display="block";
        }
        else{
          mobilebox.style.display="none";
        }
      if(menu==="job"){
          
            jobbox.style.display="block";
          }
          else{
            jobbox.style.display="none";
          }
      if(menu==="bike"){
           
              bikebox.style.display="block";
            }
            else{
              bikebox.style.display="none";
            }
      if(menu==="appliance"){
             
                abox.style.display="block";
              }
              else{
                abox.style.display="none";
              }
      if(menu==="spare"){
               
                  sparebox.style.display="block";
                }
                else{
                  sparebox.style.display="none";
                }
      if(menu==="furniture"){
                 
                    fbox.style.display="block";
                  }
                  else{
                    fbox.style.display="none";
                  }
      if(menu==="fashion"){
                    
                      fashionbox.style.display="block";
                    }
                    else{
                      fashionbox.style.display="none";
                    }
      if(menu==="book"){
                     
                        bookbox.style.display="block";
                      }
                      else{
                        bookbox.style.display="none";
                      }
      if(menu==="pet"){
                      
                          petbox.style.display="block";
                        }
                        else{
                          petbox.style.display="none";
                        }
      if(menu==="service"){
                         
                            sbox.style.display="block";
                          }
                          else{
                            sbox.style.display="none";
                          }
  };
  return (<>
  <Heading fontSize={"24px"} fontWeight="700" color="#002f34">POST YOUR AD</Heading>
  <Box className={styles.box}>
    <Heading fontSize={"16px"} fontWeight="700" color="#002f34" marginLeft="-600px">CHOOSE A CATEGORY</Heading>
    <Flex>
    <Box className={styles.menu}>
    <Box className={styles.menuitem} onClick={()=>showBox("auto")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faCar} size="lg"/></Box>
          <Box paddingTop="0.5rem">OLX Autos (Cars)</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("property")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faBuilding} size="lg"/></Box>
          <Box paddingTop="0.5rem">Properties</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("mobile")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faMobileButton} size="lg"/></Box>
          <Box paddingTop="0.5rem">Mobiles</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("job")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faBriefcase} size="lg"/></Box>
          <Box paddingTop="0.5rem">Jobs</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("bike")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faMotorcycle} size="lg"/></Box>
          <Box paddingTop="0.5rem">Bikes</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("appliance")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faDisplay} size="lg"/></Box>
          <Box paddingTop="0.5rem">Electronics {"&"} Appliances</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("spare")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faTruckPlane} size="lg"/></Box>
          <Box paddingTop="0.5rem">Commercial vehicles {"&"} Spares</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("furniture")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faCouch} size="lg"/></Box>
          <Box paddingTop="0.5rem">Furniture</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("fashion")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faShirt} size="lg"/></Box>
          <Box paddingTop="0.5rem">Fashion</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("book")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faGuitar} size="lg"/></Box>
          <Box paddingTop="0.5rem">Books,Sports {"&"} Hobbies</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("pet")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faShieldDog} size="lg"/></Box>
          <Box paddingTop="0.5rem">Pets</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
      <Box className={styles.menuitem} onClick={()=>showBox("service")}>
        <Flex justifyContent={"space-between"}>
          <Flex gap="10px">
            <Box paddingTop="0.5rem"><FontAwesomeIcon icon={faBellConcierge} size="lg"/></Box>
          <Box paddingTop="0.5rem">Services</Box>
          </Flex>
          <ChevronRightIcon w={40} h={40}/>
        </Flex>
      </Box>
    </Box>
{/* {hidden box} */}
<Box className={styles.hidden} id="auto">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Cars</Box></Link>
  </Box>
  <Box className={styles.hidden} id="property">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>For Sale:Houses {"&"} Apartments</Box></Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>For Rent:Houses {"&"} Apartments</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Lands {"&"} Plots</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>For Rent:Shops {"&"} Offices</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>For Sale:Shops {"&"} Offices</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>PG {"&"} Guest Houses</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="mobile">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Mobile Phones</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Accessories</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Tablets</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="job">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Data Entry {"&"} Back Office</Box> </Link>
  <Link to="/post"> <Box paddingTop="0.5rem" className={styles.menuitem}>Sales {"&"} Marketing</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>BPO {"&"} Telecaller</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Driver</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Office Assistant</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Delivery {"&"} collection</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Teacher</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Cook</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Receptionist {"&"} Front Office</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Operator {"&"} Technician</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>IT Engineer {"&"} Developer</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Hotel {"&"} Travel Excecutive</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Accountant</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Designer</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Other Jobs</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="bike">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Motorcycles</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Scooters</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Spare Parts</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Bycycles</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="appliance">
  <Link to="/post"> <Box paddingTop="0.5rem" className={styles.menuitem}>TVs,Video-Audio</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Kitchen {"&"} Other Appliances</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Computers {"&"} Laptops</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Cameras {"&"} Lenses</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Games {"&"} Entertainment</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Fridges</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Computer Accessories</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Hard Disc,Printers {"&"} Monitors</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>ACs</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Washing Machines</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="spare">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Commercial {"&"} Other Vehicles</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Spare Parts</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="furniture">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Sofas Dining</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Beds {"&"} Wardrobes</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Home Decor {"&"} Garden</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Kids Furniture</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Other Household Items</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="fashion">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Men</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Women</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Kids</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="book">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Books</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Gym {"&"} Fitness</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Musical Instruments</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Sports Equipments</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Other Hobbies</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="pet">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Fishes {"&"} Aquarium</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Pet Food {"&"} Accessories</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Dogs</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Other Pets</Box> </Link>
  </Box>
  <Box className={styles.hidden} id="service">
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Electronics {"&"} Computers</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Education {"&"} Classes</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Drivers {"&"} Taxis</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Health {"&"} Beauty</Box> </Link>
  <Link to="/post"><Box paddingTop="0.5rem" className={styles.menuitem}>Others</Box> </Link>
  </Box>
  </Flex>
  </Box> 
  </>)
}

export default Sellerpage