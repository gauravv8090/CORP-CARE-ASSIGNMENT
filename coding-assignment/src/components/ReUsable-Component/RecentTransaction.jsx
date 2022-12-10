
import { Text, Box, Image} from '@chakra-ui/react'
import transfer from '../../photos/transfer.svg'
import p1 from '../../photos/p1.svg'
import p2 from '../../photos/p2.svg'
import p3 from '../../photos/p3.svg'
import p4 from '../../photos/p4.svg'
import p5 from '../../photos/p5.svg'
import pL from '../../photos/pL.svg'

export const RecentTransaction = ()=>{



    return <Box position={'absolute'} width='289px' height={'251px'} 
    left='1065px' top='672px' boxShadow= '0px 4px 50px rgba(0, 0, 0, 0.06)'
     borderRadius={'10px'} backgroundColor='#FFFFFF' >
            
    <Box display={'flex'} flexDirection='row' alignItems={'center'} padding='0px' gap={'6px'} 
    position='absolute' width={'242px'} height='22px' left={'23px'} top='26px' >

       <Image src={transfer} width='13px' height={'13px'} flex={'none'} order='0' flexGrow={'0'} />

       <Box width={'226px'} height='22px' display={'flex'} alignItems='center'  >
        <Text fontWeight={500} fontSize='10px' lineHeight={'91.5%'} 
        color='#A5A5A5'fontFamily='urbanist' flex={'none'} order='1' flexGrow={'0'} >Transfer to your team</Text>
       </Box>

    </Box>
    {/* Line */}
    <Box position={'absolute'} width='244px' height={'0px'} left='22px' top='157px' border={'1px solid #E6E6E6'} >

    </Box>

    {/* DOLLAR PART */}
    <Box position={'absolute'} width='245px' height={'43px'} left='22px' top='71px' display={'flex'} 
    flexDirection='row'  alignItems='center' padding={'0px'} justifyContent='space-between' gap='5px' >

   <Box  width='123px' height={'43px'} display={'flex'} 
    alignItems='center'  flex='none'flexGrow='0' order='0' >
        <Text fontWeight='800' fontSize='40px' lineHeight='91.5%' fontFamily='urbanist' color='#ACACAC'  >$</Text>
        <Text fontWeight='800' fontSize='40px' lineHeight='91.5%' fontFamily='urbanist' color='black' >450</Text>
    </Box>
    <Box width='113px' height={'39px'} flex='none' order='1' flexGrow='0'  >
    <Box width='113px' height={'39px'} left='132' top='2px' backgroundColor='#000AFF' borderRadius='10px' >
        </Box>
    <Box position='absolute' width='71px' height={'26px'} left='153' top='9px'
    display='flex' alignItems='center' justifyContent='center' borderRadius='10px'  >
        <Text fontWeight='800' fontSize='12px' fontFamily='Urbanist' lineHeight='91.5%' color='#FFFFFF' >Transfer</Text>
        </Box>

    </Box>


    </Box>

    {/* people image */}
    <Box position={'absolute'} width='150px' height={'30px'} left='22px' top='180px' display={'flex'} 
    flexDirection='row'  alignItems='center' padding={'0px'} >
        {/* <Box width={'30xp'} height='30px' flex='none' order='0'flexGrow='0' margin='0px -6px'  > */}
        {/* </Box> */}
        {/* <Box width={'30xp'} height='30px' flex='none' order='0'flexGrow='0' margin='0px -6px'  >
        <Image src={p2}  />
        </Box> */}
        <Image src={p1} width={'30xp'} height='30px' flex='none' order='0'flexGrow='0'  />
        <Image src={p2} width={'30xp'} height='30px' flex='none' order='1'flexGrow='0' margin='0px -4px' left='24px' />
        <Image src={p3} width={'30xp'} height='30px' flex='none' order='2'flexGrow='0' margin='0px -4px' left='48px' />
        <Image src={p4} width={'30xp'} height='30px' flex='none' order='3'flexGrow='0' margin='0px -4px' left='72px'  />
        <Image src={p5} width={'30xp'} height='30px' flex='none' order='4'flexGrow='0' margin='0px -4px' left='96px' />
        <Image src={pL} width={'30xp'} height='30px' flex='none' order='5'flexGrow='0' margin='0px -4px' />


    </Box>



</Box>

}