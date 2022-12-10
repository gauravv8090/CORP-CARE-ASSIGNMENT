import { Text, Box, Image } from '@chakra-ui/react'
import overview from '../photos/overview.png'
import analytics from '../photos/analytics.png'
import payout from '../photos/payout.png'
import products from '../photos/products.png'
import schedule from '../photos/schedule.png'
import statements from '../photos/statements.png'
import help from '../photos/help.png'
import comm from '../photos/comm.png'
import setting from '../photos/setting.png'
import logout from '../photos/logout.png'


export const SideBar = ()=>{



    return <Box style={{  height: '1024px' , width: '247px' , borderRight:'1px solid grey',  display:'flex',  }}   >
        <Box style={{  height: '799px' , width: '149px' ,  margin:'auto', alignItems:'center'   }} >
            <Box style={{  height: '44px' , width: '125px' , marginBottom:'66px'   }}  >
                <Text fontSize='48px' fontFamily={'Urbanist'} color='#0038FF' fontWeight='800' letterSpacing='-0.055em' lineHeight='91.5%'  >LOGO</Text>
            </Box>
                <Box style={{  marginTop:'65px', height: '686.5px' , width: '149px' ,  margin:'auto', alignItems:'center'   }} >
                    <Box style={{  height: '314px' , width: '161px' ,  margin:'auto', alignItems:'center'  }} >
                        <Box display={'flex'} >
                            <Box> <Image src={overview} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='black' >Overview</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={products} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' marginTop={'-2px'}> Products </Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={analytics} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' marginTop={'-2px'} >Analytics</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={schedule} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Schedule</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={payout} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Payout</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={statements} marginRight = '20px' /> </Box>
                            <Text fontWeight='bold' color='grey' >Statement</Text>
                        </Box>
                    </Box>
                    <Box style={{  height: '122px' , width: '161px',   margin:'auto', alignItems:'center'   }} >
                        
                        <Box style={{ height: '61px',width:'161px', borderBottom: '1px solid grey', marginLeft:'-10px'  }} ></Box>

                    </Box>
                    <Box style={{  height: '196px' , width: '144px',   margin:'auto', alignItems:'center'   }} >
                    <Box display={'flex'} >
                            <Box> <Image src={help} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Help</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={comm} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Community</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={setting} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Settings</Text>
                        </Box>
                        <Box display={'flex'} >
                            <Box> <Image src={logout} marginRight = '20px' marginBottom={'38px'} /> </Box>
                            <Text fontWeight='bold' color='grey' >Logout</Text>
                        </Box>
                    </Box>
                </Box>
        </Box>
    </Box>

}