import { z } from 'zod'
import { feelingsEnum } from '../../enums/dreams/feelingsEnum'
import { intensityEnum } from '../../enums/dreams/intensityEnum'
import { lifeCatgoriesEnum } from '../../enums/dreams/lifeCategoriesEnum'
import { timeReferenceEnum } from '../../enums/dreams/timeReferenceEnum'
import { sourceEnum } from '../../enums/dreams/sourceEnum'
import { purposeEnum } from '../../enums/dreams/purposeEnum'

export const createDreamValidation = z.object({
  user_id: z.string().optional(), // will probably check it in a middleware
  date: z.preprocess((a) => new Date(z.string().parse(a)), z.date()),
  //created_at: z.date(),
  //date: z.date(),
  //edited_at: z.date(),
  title: z.string(),
  description: z.string(),
  feelings: z.array(z.enum(feelingsEnum)),
  intensity: z.array(z.enum(intensityEnum)),
  keywords: z.array(z.string()),
  life_context: z.string(),
  life_categories: z.array(z.enum(lifeCatgoriesEnum)),
  time_reference: z.enum(timeReferenceEnum),
  source: z.enum(sourceEnum),
  interpretation: z.string(),
  purpose: z.enum(purposeEnum),
})
