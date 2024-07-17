import { UserRound } from "lucide-react";
import { Combobox } from "../ui/combobox";
import { Post } from "./post-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export default function Filters() {
  return (
    <div className="flex gap-3">
      <Combobox
        placeholder="所有大學"
        searchBarPlaceholder="搜尋大學"
        options={[{
          value: "all",
          label: "所有大學",
        },...schoolsPlaceholder]}
      />
      <Combobox
        placeholder="所有科系"
        searchBarPlaceholder="搜尋科系"
        options={[{
          value: "all",
          label: "所有科系",
        },...majorPlaceholder]}
      />
      <Combobox
        placeholder="所有組別"
        searchBarPlaceholder="搜尋組別"
        options={[{
          value: "all",
          label: "所有組別",
        },...categoriesPlaceholder]}
      />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="所有年度" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="2020">2020</SelectItem>
          <SelectItem value="2021">2021</SelectItem>
          <SelectItem value="2022">2022</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="正取" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="正取">正取</SelectItem>
          <SelectItem value="已備上">已備上</SelectItem>
          <SelectItem value="未備上">未備上</SelectItem>
          <SelectItem value="未錄取">未錄取</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

const categoriesPlaceholder = [
  {
    value: "apcs",
    label: "APCS 組",
  },
  {
    value: "math",
    label: "百川學位",
  },
  {
    value: "physics",
    label: "甲組",
  },
  {
    value: "chemistry",
    label: "乙組",
  },
];


const schoolsPlaceholder = [
  {
    value: "ntu",
    label: "國立台灣大學",
  },
  {
    value: "nthu",
    label: "國立清華大學",
  },
  {
    value: "nctu",
    label: "國立交通大學",
  },
  {
    value: "ncku",
    label: "國立成功大學",
  },
];

const majorPlaceholder = [
  {
    value: "cs",
    label: "資訊工程學系",
  },
  {
    value: "ee",
    label: "電機工程學系",
  },
  {
    value: "me",
    label: "機械工程學系",
  },
  {
    value: "ce",
    label: "土木工程學系",
  },
];