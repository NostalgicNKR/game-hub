import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchQuery: string) => void;
}

const SearchGames = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchInput.current) onSearch(searchInput.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={searchInput} borderRadius={10} variant={"filled"} placeholder="Search the games" />
      </InputGroup>
    </form>
  );
};

export default SearchGames;
