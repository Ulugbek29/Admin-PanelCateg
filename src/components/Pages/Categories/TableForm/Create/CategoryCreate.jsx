import React from 'react'
import { Grid } from "@mui/material";
import FormCard from "../../../../FormCard/FormCard";
import FRow from "../../../../FormElements/FRow";
import FTextField from "../../../../FormElements/FTextField";
import FPassword from "../../../../FormElements/FPassword";
import FSelect from "../../../../FormElements/FSelect";

const jobTitles = [
  { label: "Software Engineer", value: "software_engineer" },
  { label: "Data Scientist", value: "data_scientist" },
  { label: "Product Manager", value: "product_manager" },
  { label: "UX/UI Designer", value: "ux_ui_designer" },
  { label: "Marketing Specialist", value: "marketing_specialist" },
  { label: "Financial Analyst", value: "financial_analyst" },
  { label: "Human Resources Manager", value: "hr_manager" },
  { label: "Sales Representative", value: "sales_representative" },
  { label: "Graphic Designer", value: "graphic_designer" },
  {
    label: "Customer Support Specialist",
    value: "customer_support_specialist",
  },
];

const uzbekistanRegions = [
  { label: "Andijan", value: "andijan" },
  { label: "Bukhara", value: "bukhara" },
  { label: "Fergana", value: "fergana" },
  { label: "Jizzakh", value: "jizzakh" },
  { label: "Karakalpakstan", value: "karakalpakstan" },
  { label: "Namangan", value: "namangan" },
  { label: "Navoiy", value: "navoiy" },
  { label: "Samarkand", value: "samarkand" },
  { label: "Sirdaryo", value: "sirdaryo" },
  { label: "Tashkent", value: "tashkent" },
];


export default function CategoryCreate({control,backToThePreviousPage}) {

  


  return (
    <div>
    <Grid container spacing={2}>
          <Grid item xs={5}>
            <FormCard title="Личные данные">
              <FRow label="F.I.O" required>
                <FTextField
                  control={control}
                  name="fullName"
                  required
                  rules={{}}
                  fullWidth
                />
              </FRow>
            </FormCard>
          </Grid>
          <Grid item xs={7}>
            <FormCard title="Авторизация">
              <FRow required label="Номер телефона">
                <FTextField
                  control={control}
                  name="number"
                  required
                  rules={{}}
                  fullWidth
                  type="number"
                />
              </FRow>
              <FRow required label="Логин">
              <FTextField
                  control={control}
                  name="login"
                  required
                  rules={{}}
                  fullWidth
                />
              </FRow>
              <FRow required label="Ввведите пароль">
                <FPassword
                  control={control}
                  name="password"
                  required
                  rules={{}}
                  fullWidth
                />
              </FRow>
            </FormCard>
          </Grid>

          <Grid item xs={12}>
            <FormCard title="Доступы">
              <div className="flex gap-8 ">
                <Grid item xs={6}>
                  <FRow required label="Должность">
                    <FSelect
                      control={control}
                      name="jobTitle"
                      required
                      fullWidth
                      rules={{}}
                      options={jobTitles}
                    />
                  </FRow>
                </Grid>
                <Grid item xs={6}>
                  <FRow required label="Регионы">
                    <FSelect
                      control={control}
                      name="region"
                      required
                      fullWidth
                      rules={{}}
                      options={uzbekistanRegions}
                    />
                  </FRow>
                </Grid>
              </div>
              <div className="w-full flex gap-2 justify-end">
              <button  className="p-4 bg-red-500 text-white rounded-lg" onClick={backToThePreviousPage}>Отменить</button>
              <button className="p-4 bg-blue-500 text-white rounded-lg" type="submit">Создать</button>
              </div>
            </FormCard>
          </Grid>
        </Grid>
    </div>
  )
}
