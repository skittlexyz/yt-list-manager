import {
    DrawerClose,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { Input } from "./ui/input"
import BadgeCheckbox from "./badge-checkbox"
import { Button } from "@/components/ui/button"

interface VideoInfoWindowProps {
    title: string
    confirmText: string
}

function VideoInfoWindow({ title, confirmText }: VideoInfoWindowProps) {
    const handleConfirm = () => {
        {/* take inputs check'em and add to video list, close drawer */}
    }

    return (
        <div className="flex flex-col w-[300px] md:w-[500px]">
            <DrawerHeader>
                <DrawerTitle className="text-center">{title}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 py-0 flex flex-col gap-3 justify-center items-center">
                <p className="text-left w-full my-1">Informações do Vídeo</p>
                <Input id="teste1" type="text" placeholder="Título do Vídeo" />
                <Input type="url" placeholder="Link do Vídeo" />
                <p className="text-right w-full my-1">Tags do Vídeo</p>
                <div className="flex flex-wrap justify-between w-full gap-y-3">
                    <BadgeCheckbox name="_" />
                    {/* make FOR loop to add badge checkboxes */}
                </div>
            </div>
            <DrawerFooter className="flex flex-row gap-2">
                <DrawerClose className="w-3/6">
                    <Button className="w-full" variant="outline">Cancelar</Button>
                </DrawerClose>
                <Button onClick={handleConfirm} className="w-3/6">{confirmText}</Button>
            </DrawerFooter>
        </div>
    )
}

export default VideoInfoWindow