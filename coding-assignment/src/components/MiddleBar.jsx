
import { Text, Box, Image} from '@chakra-ui/react'
import hello from '../photos/hello.png'
import search from '../photos/search.png'
import one from '../photos/one.png'
import two from '../photos/two.png'
import three from '../photos/three.png'
import { Reminder } from './ReUsable-Component/Reminder'
import { RecentTransaction } from './ReUsable-Component/RecentTransaction'
import { RecentOne } from './ReUsable-Component/ReceentOne'
import { Analytics } from './ReUsable-Component/Analytics'
import { Earnings } from './ReUsable-Component/Earnings'
import { RecentTwo } from './ReUsable-Component/RecentTwo'


export const MiddleBar = ()=>{




    return <Box style={{  height: '1024px' , width: '748px' , borderRight:'1px solid grey',  }}  >
        <Box style={{ position:'absolute', width: '1052px', height: '54px', left: '292px', top:'57px', display:'flex',
         justifyContent:'space-between', alignItems:'center' }} >
            
            <Box style={{ width:'672px', height:'54px', display:'flex', justifyContent:'space-between', alignItems:'center' }} >
            <Box display={'flex'}  alignItems='center' ><Text fontWeight={800} fontSize='36px' fontFamily='Urbanist'  lineHeight={'32.94px'} >Hello, John</Text><Image marginLeft={'10px'} src={hello} /></Box>    
            <Box>
                <Box width={'339px'} height='54px' bgColor={'#f5f5f5'} borderRadius='10px' display={'flex'} alignItems='center' >
                    <Image height={'20px'} width={'20px'} marginLeft='17px' src={search} />
                    <input type="text" placeholder='Search' style={{backgroundColor:'#f5f5f5', marginLeft:'10px', outline:'none'}} />
                </Box>
                </Box>    
            </Box  >

            <Box display={'flex'} flexDirection='row' justifyContent={'space-between'} alignItems='center' gap={'29px'} width='148px' height={'38px'}   >
                <Image height={'30px'} width='30px' src={one} />
                <Image height={'30px'} width='30px' src={two} />
                <Image height={'38px'} width='38px' src={three} />

            </Box>

        </Box>


        {/* top portion of 3 */}
        <Box display= 'flex' flex-direction= 'row' justify-content= 'center'  align-items ='flex-start'
         padding= '0px' gap= '118px' position={'absolute'} width='1062px' height={'394px'}
          left='292px' top='174px'>
            
            <Box display= 'flex' flex-direction= 'row'
              padding= '0px' gap= '28px'  width='655px'
               height={'319px'} left='292px' top='174px'>
            {/* analytics small box */}
            <Box position={'absolute'} width='118px' height={'30px'}  display={'flex'} alignItems='center' >

            <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'14px'}lineHeight='91.5%' color={'black'} >Analytics</Text>
            </Box>
            {/* analytics component box */}
            <Analytics/>

            {/* reminder small box */}
            <Box position={'absolute'} width='118px' height={'30px'} left='446px' top={'0px'} 
             display={'flex'} alignItems='center' >

            <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'14px'}lineHeight='91.5%' color={'black'} >Reminder</Text>
            </Box>
            {/* reminder static box */}
            <Reminder/>

        </Box>

        <Box width={'289px'} height='394px'  >
            <Box position={'absolute'} width='118px' height={'30px'}left='774px'top={'0px'}
            display='flex' alignItems={'center'}  >
                <Text fontWeight={'800'} fontFamily='Urbanist' fontSize={'14px'}lineHeight='91.5%' color={'black'}>Earnings</Text>
            </Box>

            {/* reusable frame */}
            <Earnings/>

        </Box>

        </Box>
        {/* bottom portion of 2 */}

         {/* first */}
        <Box display= 'flex' flex-direction= 'row' justify-content= 'center'   padding= '0px' gap= '28px' position={'absolute'}
         width='655px' height={'394px'} left='292px' top='529px' >
           {/* first */}
           <Box position='absolute' width='338px' height='393px' left='0px' top='0.5px'  >

            <Box position='absolute' width='141px' height='30px' left='0px' top='0.5px' 
             display='flex' alignItems='center'  >
                <Text fontWeight={'800'} fontSize={'14px'} fontFamily='urbanist' lineHeight='91.5%' color={'black'} >Recent Transactions  </Text>
            </Box>

            {/* Reusable Box   RECENE ONE */}
            
            <RecentOne/>

           </Box>

            {/* second */}
        {/* <Box border={'2px solid teal'} width={'289px'} height='349px' flex={'none'}order='1' flexGrow={'0'} ></Box> */}
        <Box position='absolute' width='141px' height='30px' left='366px' top='0px' 
             display='flex' alignItems='center'  >
                <Text fontWeight={'800'} fontSize={'14px'} fontFamily='urbanist' lineHeight='91.5%' color={'black'} >Recent Transactions  </Text>
            </Box>

            {/* Reusable Box   RECENE TWO */}

            <RecentTwo/>


        </Box>


        {/* bottom right portion of 3rd */}

        <Box  position={'absolute'} width='291px' height={'301px'} left='1063px' top='622px' >


        </Box>
        <Box position={'absolute'} width='141px' height={'30px'} left='1063' top={'622px'}  display={'flex'} alignItems='center' >

            <Text fontWeight={'800'} fontSize={'14px'} fontFamily='urbanist' lineHeight='91.5%' color={'black'} >Recent Transactions</Text>
            </Box>

          {/* MAIN 3rd Box ReUsable */}

          <RecentTransaction/>


        





    </Box>

}