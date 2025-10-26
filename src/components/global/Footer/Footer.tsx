import { Button, Divider, Typography, Input, message } from 'antd';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { LuSend } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const { Text } = Typography;

const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  const FormSchema = z.object({
    email: z
      .string()
      .min(1, { message: t('this-field-is-required') })
      .email({ message: t('invalid-email') }),
  });

  type FormType = z.infer<typeof FormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
    reset,
    clearErrors,
    watch,
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('✅ Dữ liệu hợp lệ:', data);

    message.success(t('send-successfully'));

    reset();
  };

  const onError = (errors: any) => {
    console.error('❌ Lỗi submit:', errors);

    const firstErrorKey = Object.keys(errors)[0];
    setFocus(firstErrorKey as any);
  };

  return (
    <footer
      className='bg-secondary-gray px-[16px] py-[5px]
                  shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_0_-2px_4px_-2px_rgba(0,0,0,0.1)]'
    >
      <div className='mx-auto w-full max-w-[1024px] flex flex-col items-center justify-center'>
        <div className='my-5 w-full grid grid-cols-1 md:grid-cols-[60%_1fr] gap-[30px] sm:gap-[100px]'>
          <form className='w-full' onSubmit={handleSubmit(onSubmit, onError)}>
            <span className='text-[0.95rem]'>{t('get-lastest-updates')}</span>

            <div className='mt-6 flex items-start gap-3'>
              <Controller
                control={control}
                name='email'
                render={({ field }) => {
                  return (
                    <div className='w-full flex flex-col gap-2'>
                      <Input {...field} placeholder='Email' status={errors.email ? 'error' : ''} />

                      {errors.email && (
                        <Text type='danger' style={{ fontSize: 12 }}>
                          {errors.email.message}
                        </Text>
                      )}
                    </div>
                  );
                }}
              />

              <Button type='primary' htmlType='submit' icon={<LuSend />}>
                {t('register')}
              </Button>
            </div>
          </form>

          <div className='w-full flex flex-wrap items-center gap-5'>
            <div className='flex flex-col gap-3 items-start'>
              <span className='text-[0.95rem]'>{t('contact')}</span>

              <ul className='flex flex-col gap-5 list-none p-0'>
                <li>
                  <a
                    href='mailto:minhtri.fit@gmail.com'
                    className='text-[#FFF] flex items-center gap-3 hover:text-primary hover:cursor-pointer'
                  >
                    <AiOutlineMail size={20} />
                    <span className='text-[0.9rem]'>Email</span>
                  </a>
                </li>

                <li>
                  <a
                    href='https://linkedin.com/in/lê-minh-trí-89ab94215'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#FFF] flex items-center gap-3 hover:text-primary hover:cursor-pointer'
                  >
                    <FaLinkedin size={20} />
                    <span className='text-[0.9rem]'>Linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Divider />

        <span className='flex flex-wrap items-center justify-center sm:justify-start gap-2'>
          © Copyright {year} & built with ❤️ by
          <p className='text-primary'>minhtrifit</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
