import {Box, Text} from '@chakra-ui/react'

import { LineChart } from '../LineChart'
 
export const Analytics = ()=>{




    return <Box boxShadow='0px 3px 50px rgba(0, 0, 0, 0.08)' position={'absolute'}
     width='418px' height={'269px'} top='50px' borderRadius='10px' left='0px' >


          <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' 
          padding='0px' gap='77px' position='absolute' width='348px' height='18px' left='32px' top='25px'  >
            {/* 1 */}
            <Box width='73px' height='18px' flex='none'order='0'flexGrow='0'  >
                <Box position='absolute' width='42.08px' height='16px' left='15.46px' top='1px' display={'flex'} alignItems='center' >
                    {/* <Text fontFamily={'Urbanist'} color='White' fontWeight='800' fontSize={'8px'} lineHeight='91.5%'>Income</Text> */}
                </Box>
                    <Box position='absolute' width='73px' height='18px'
                     left='0' top='0' borderRadius={'25px'} backgroundColor='#525252'  display={'flex'} alignItems='center' justifyContent='center'  >
                         <Text fontFamily={'Urbanist'} fontStyle='normal' color='White' fontWeight='800' fontSize={'8px'} lineHeight='91.5%'>Income  ↓</Text>
                         {/* <Text fontFamily={'Urbanist'} color='White' fontWeight='800' fontSize={'8px'} lineHeight='91.5%'> ↓</Text> */}
                     </Box>
            </Box>
            {/* 2 */}

            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center' 
          padding='0px' width='112px' height='18px' flex='none' order='1' flexGrow='0'  >
            <Box width={'49px'}height={'9px'} display='flex' alignItems={'center'}justifyContent='center' flex='none' order='1' flexGrow='0' >
            <Text fontFamily={'Urbanist'} fontStyle='none' color='#B1B1B1' fontWeight='500' fontSize={'8px'} lineHeight='91.5%' >Sort By</Text>
            </Box>
            <Box width='64px'height={'18px'} flex='none' order='1' flexGrow='0'  >
                <Box width='64px' height={'18px'}left='48px'top={'0px'}backgroundColor='#FFFFFF'
                boxShadow={'0px 2px 8px rgba(0, 0, 0, 0.15)'} borderRadius='25px' display={'flex'} alignItems='center' justifyContent={'center'} >
                <Text fontFamily={'Urbanist'} fontStyle='normal' color='black' fontWeight='800' fontSize={'8px'} lineHeight='91.5%'>Month ↓</Text>

                </Box>

            </Box>
            </Box>
          </Box>

          <Box position={'absolute'} top='59px' left={'30px'}  >

             <LineChart/>

          </Box>


          

    </Box>

}