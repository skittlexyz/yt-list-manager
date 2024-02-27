import { Checkbox } from "./ui/checkbox"

interface BadgeCheckboxProps {
    name: string;
}

function BadgeCheckbox({ name }: BadgeCheckboxProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="x" />
            <label htmlFor="x" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {name}
            </label>
        </div>
    )
}

export default BadgeCheckbox