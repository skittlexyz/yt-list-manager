import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle'
import { ListVideo } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger
} from "@/components/ui/drawer"
import VideoInfoWindow from "./video-info-window"

function Header() {
    return (
        <div className='z-10 pt-[2rem] fixed w-full max-w-[280px] 2xl:max-w-[1280px] xl:max-w-[1100px] lg:max-w-[900px] md:max-w-[600px] bg-white dark:bg-gray-950'>
            <div className='flex justify-between mb-6'>
                <h1 className="flex justify-center items-center scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
                    <ListVideo className='h-[1em] w-[1em] mr-1 mt-1.5' />
                    YT List Manager
                </h1>
            </div>
            <div className='flex'>
                <div className="flex gap-4 w-[100%] mr-4">
                    <TooltipProvider>
                        <Tooltip>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <TooltipTrigger asChild>
                                        { /* make button be an icon on small screens to fit everything */}
                                        <Button><b>Adicionar Vídeo</b></Button>
                                    </TooltipTrigger>
                                </DrawerTrigger>
                                <DrawerContent className="flex items-center">
                                    <VideoInfoWindow title="Adicionar Vídeo" confirmText="Adicionar" />
                                </DrawerContent>
                            </Drawer>
                            <TooltipContent>
                                <p>(～￣▽￣)～</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Input className="w-min" placeholder="Search"/>
                </div>
                <ModeToggle></ModeToggle>
            </div>
            <Separator className='mt-6' />
        </div>
    )
}

export default Header

