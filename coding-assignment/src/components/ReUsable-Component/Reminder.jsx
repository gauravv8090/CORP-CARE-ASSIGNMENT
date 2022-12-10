
import { Text, Box, Image} from '@chakra-ui/react'
import reminder from '../../photos/reminder.png'


export const Reminder = ()=>{





    return <Box position={'absolute'} width='209px' height={'269px'} top='50px' left='446px'backgroundColor={'#0038FF'} borderRadius='15px'>
    <Image src={reminder} position='absolute' width={'74px'} height='74px' left={'62px'} top='59px' borderRadius={'15px'}  />
    {/* Button */}
    <Box position={'absolute'} width='164px' height={'39px'} left='24px' top='199px' backgroundColor={'#FFFFFF'} borderRadius='10px' >
    </Box>
    {/* Button  Text*/}
        <Box position={'absolute'} width='104px' height={'26px'} left='54px' display='flex' alignItems={'center'} justifyContent='center'  top='206px'  >
            <Text fontWeight={800} fontFamily='urbanist' fontSize='12px' lineHeight={'141.5%'}  color='#000000'  >Set as Reminder</Text>
        </Box>
        {/* will be published part */}
        <Box position={'absolute'} width='148px' height={'33px'} top='147px' left='25px'  display='flex' alignItems={'center'} justifyContent='center'  >
            <Text fontWeight={800} fontSize='14px' fontFamily='urbanist' lineHeight={'141.5%'}  color='#FFFFFF' textAlign='center' >Will be Published <br /> Nov 25, 2022</Text>

        </Box>
        {/* Agency design kit part */}
        <Box position={'absolute'} width='148px' height={'33px'} top='20px' left='25px'  display='flex' alignItems={'center'} justifyContent='center'  >
            <Text fontWeight={800} fontSize='14px' fontFamily='urbanist'  lineHeight={'91.5%'}  color='#FFFFFF' textAlign='center' >Agency Design Kit </Text>

        </Box>
</Box>



}