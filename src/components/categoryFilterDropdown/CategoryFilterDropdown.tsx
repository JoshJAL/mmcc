interface CategoryFilterDropdownProps {
  setFilter: (filter: string) => void;
}

export default function CategoryFilterDropdown({ setFilter }: CategoryFilterDropdownProps) {
  return (
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value=''>None</option>
      <option value='first'>First Name</option>
      <option value='last'>Last Name</option>
      <option value='email'>Email</option>
      <option value='country'>Country</option>
      <option value='city'>City</option>
      <option value='state'>State</option>
      <option value='timezoneDescription'>Timezone Description</option>
      <option value='timezone'>Timezone Offset</option>
    </select>
  )
}