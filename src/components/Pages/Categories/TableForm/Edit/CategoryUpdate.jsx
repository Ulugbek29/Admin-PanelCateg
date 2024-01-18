import React from 'react'
import { Grid } from "@mui/material";
import FormCard from '../../../../FormCard/FormCard';
import FRow from '../../../../FormElements/FRow';
import FTextField from "../../../../FormElements/FTextField";
import FSelect from "../../../../FormElements/FSelect";
import HFDatePicker from "../../../../FormElements/DatePicker";
import Button from '@mui/material/Button';

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

export default function CategoryUpdate({control, updateCategory, backToThePreviousPage}) {
  return (
    <div>
        <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormCard title="Update">

                    <div className='flex'>
                    <Grid item xs={4}>
                            <FRow label="firstName" required vertical>
                            <FTextField
                                control={control}
                                name="firstName"
                                required
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            <FRow label="lastName" required vertical>
                            <FTextField
                                control={control}
                                name="lastName"
                                required
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            <FRow label="maidenName" vertical>
                            <FTextField
                                control={control}
                                name="maidenName"
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                    </div>

                    <div className='flex'>
                    <Grid item xs={4}>
                            <FRow label="Username" required vertical>
                            <FTextField
                                control={control}
                                name="username"
                                required
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            <FRow label="Age" required vertical>
                            <FTextField
                            type='number'
                                control={control}
                                name="age"
                                required
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            {/* <FRow label="Birth date" required vertical>
                            <HFDatePicker
                                control={control}
                                name="datePicker"
                                required
                                rules={{}}
                                />
                            </FRow> */}
                            <FRow label="Email" required vertical>
                            <FTextField
                                //  type='email'
                                control={control}
                                name="email"
                                required
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                    </div>
                    <div className='flex'>
                    <Grid item xs={4}>
                            <FRow label="Birth date" required vertical>
                            <HFDatePicker
                                control={control}
                                name="birthDate"
                                required
                                rules={{}}
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            <FRow label="Job Titles" required vertical>
                            <FSelect
                                control={control}
                                name="jobTitle"
                                required
                                options={jobTitles}
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                        <Grid item xs={4}>
                            <FRow label="Region" required vertical>
                            <FSelect
                                control={control}
                                name="city"
                                required
                                options={uzbekistanRegions}
                                rules={{}}
                                fullWidth
                                />
                            </FRow>
                        </Grid>
                    </div>

                    <div className='w-full justify-end flex gap-4'>
                    <Button onClick={backToThePreviousPage} variant="outlined" color='error'>Cancel</Button>
                    <Button type='submit' variant="contained" color='warning'>Edit</Button>
                    </div>
                    </FormCard>
                </Grid>                        
        </Grid>
    </div>
  )
}
