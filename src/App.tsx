import { useRef, useState } from 'react'
import { DatePickerInput, TimeInput } from '@mantine/dates';

function TimePicker() {
  const ref = useRef<HTMLInputElement>();
  const [time, setTime] = useState<string>("")

  return (
    <div>
      <h2 className='mb-2 text-xl font-semibold'>Selected time: {time}</h2>
      <TimeInput
        ref={ref}
        label="Click icon to show browser picker"
        onFocus={() => ref.current?.showPicker()}
        classNames={{ input: "border border-blue-500" }}
        onChange={(e) => { setTime(e.target.value) }}
      />
    </div>
  );
}

function CustomDatePicker() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div>
      <h2 className='mb-2 text-xl font-semibold truncate'>Selected Date: {JSON.stringify(value)}</h2>
      <DatePickerInput
        label="Pick date"
        placeholder="Pick date"
        allowDeselect
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

function CustomDateRange() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div>
      <h2 className='mb-2 text-xl font-semibold'>Selected Date Range: <span className='block font-normal text-base'>{JSON.stringify(value)}</span></h2>
      <DatePickerInput
        type="range"
        // label="Pick dates range"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
      />
    </div>
  )
}

function App() {
  return (
    <main className='m-10 flex flex-col gap-10 max-w-xs mx-auto'>
      <TimePicker />
      <CustomDatePicker />
      <CustomDateRange />
    </main>
  )
}

export default App
