import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { loginFunction } from "@/apis/auth";
import { useRouter } from "next/router";
import { LoginInterface, ISignupInterface } from "@/data/auth";


export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ISignupInterface>();
  const router = useRouter()
  const onSubmit: SubmitHandler<LoginInterface> = async (data) => {
    try {
      await loginFunction(data);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="md">
      <Heading mb={6}>Sign Up</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register("email", { required: true })} type="email" />
            <FormErrorMessage>
              {errors.email && "Email is required"}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
            />
            <FormErrorMessage>
              {errors.password &&
                "Password is required and must be at least 6 characters"}
            </FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            loadingText="Submitting"
            colorScheme="blue"
          >
            Sign Up
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
