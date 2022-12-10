import { Box, Text } from "@chakra-ui/react"
import { LineChartRecent } from "../LineChartRecent"




export const RecentTwo = ()=>{




    return <Box position='absolute' width='289px' height='344px' left='366px' top='50px'
    backgroundColor='#FFFFFF' boxShadow='0px 4px 50px rgba(0, 0, 0, 0.06)'
    borderRadius='10px'  >

        <Box position={'absolute'} width='184px' height={'97px'} left='52px' top='49px'
         display={'flex'}   justifyContent={'center'} >
        </Box>
            <Box position={'absolute'} width={'124px'} height='10px' left={'82px'} top='49px' display={'flex'} alignItems='center' justifyContent={'center'} >
                <Text fontWeight={'500'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'#A5A5A5'} >Accounts Reached</Text>
            </Box>
            <Box position={'absolute'} width={'167px'} height='56px' left={'61px'} top='65px' display={'flex'} alignItems='center'  justifyContent={'center'} >
                <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'48px'}lineHeight='91.5%' color={'black'} >11,756</Text>
            </Box>

            <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}alignItems='flex-end'
            padding={'0px'} gap='15px'position={'absolute'} width='184px' height={'13px'} left='52px' top='133px'
             >

                <Box  height='13px' flex={'none'} order='0' flexGrow={'0'} display='flex' alignItems={'center'} >
                    <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'#BCBCBC'}>Day</Text>
                </Box>
                <Box  height='13px' flex={'none'} order='1' flexGrow={'0'} display='flex' alignItems={'center'} >
                    <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'#BCBCBC'}>Week</Text>
                </Box>
                <Box  height='13px' flex={'none'} order='2' flexGrow={'0'} display='flex' alignItems={'center'} >
                    <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'black'}>Month</Text>
                </Box>
                <Box  height='13px' flex={'none'} order='2' flexGrow={'0'} display='flex' alignItems={'center'} >
                    <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'10px'}lineHeight='91.5%' color={'#BCBCBC'}>Year</Text>
                </Box>
            </Box>

            <Box position={'absolute'} top='150px' left={'5px'} >
                <LineChartRecent/>
            </Box>


    </Box>

}