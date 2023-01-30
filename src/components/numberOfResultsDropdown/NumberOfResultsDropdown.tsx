interface NumberOfResultsDropdownProps {
  setResultCount: (value: string) => void
}

export default function NumberOfResultsDropdown({ setResultCount }: NumberOfResultsDropdownProps) {
  return (
    <select defaultValue={'10'} onChange={(e) => setResultCount((e.target.value))}>
      <option value={"1"}>1</option>
      <option value={"10"}>10</option>
      <option value={"15"}>15</option>
      <option value={"25"}>25</option>
      <option value={"50"}>50</option>
      <option value={"100"}>100</option>
      <option value={"500"}>500</option>
    </select>
  )
}