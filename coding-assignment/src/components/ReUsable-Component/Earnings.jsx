import { Box, Text } from "@chakra-ui/react"
import { BarChart } from "../BarChart"




export const Earnings = ()=>{




    return <Box position={'absolute'} width='289px' height={'344px'}left='773px'top={'50px'}
    boxShadow='0px 4px 50px rgba(0, 0, 0, 0.06)' borderRadius={'10px'} >
        <Box position={'absolute'}width='167px' height={'91px'} left='61px' top={'32px'} >

            <Box display={'flex'} flexDirection='column'alignItems={'center'} padding='0px' gap={'8px'}
             width='167px' height={'91px'}left='61px' top={'32px'}   >
                <Box width={'124px'} height={'10px'} display='flex' alignItems={'center'} 
                justifyContent='center' flex={'none'} order='0' flexGrow={'0'}  >
                    <Text fontWeight={'500'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'#A5A5A5'}>Saved this month</Text>
                </Box>
                <Box width={'167px'} height={'43px'} display='flex' alignItems={'center'} 
                justifyContent='center' flex={'none'} order='1' flexGrow={'0'} >
                    <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'40px'}lineHeight='91.5%' color={'black'} >$12,281</Text>
                </Box>
                <Box width={'124px'} height={'22px'} display='flex' alignItems={'center'} 
                justifyContent='center' flex={'none'} order='2' flexGrow={'0'} >
                    <Text fontWeight={'500'} fontFamily='Urbanist' fontSize={'10px'}
                    lineHeight='91.5%' color={'#A5A5A5'} >Your payment will be updated by the system</Text>
                </Box>

            </Box>

        </Box>
            <Box position={'absolute'}width='231px' height={'179px'} left='23px' top={'134px'}  >
                <BarChart/>
            </Box>
    </Box>

}