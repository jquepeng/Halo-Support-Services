import {useAppForm} from "@/hooks/form-hook.tsx";
import {Card} from "@/components/ui/card.tsx";
import {Form, FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";

export function ContactForm() {
    const form = useAppForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        },
        onSubmit: async ({value}) => {
            console.log("Form submitted:", value)
            alert(`Hello ${value.firstName} ${value.lastName}!`)
        },
    })

    return (
        <Card className={"md:max-w-lg w-full p-6 bg-white"}>
            <form.AppForm>
                <Form className="space-y-4 w-full @container">
                    <h1 className={"text-5xl font-semibold"}>Get in touch<span className={"text-transparent bg-clip-text gradient"}>?</span></h1>
                    <div className={"flex w-full flex-col @sm:flex-row gap-4"}>
                        <form.AppField
                            name="firstName"
                            validators={{
                                onChange: ({value}: { value: string }) =>
                                    !value
                                        ? "A first name is required"
                                        : value.length < 2
                                            ? "First name must be at least 2 characters"
                                            : undefined,
                            }}
                        >
                            {(field) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. John"
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        </form.AppField>
                        <form.AppField
                            name="lastName"
                            validators={{
                                onChange: ({value}: { value: string }) =>
                                    !value
                                        ? "A last name is required"
                                        : value.length < 2
                                            ? "Last name must be at least 2 characters"
                                            : undefined,
                            }}
                        >
                            {(field) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g. Smith"
                                            value={field.state.value}
                                            onBlur={field.handleBlur}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        </form.AppField>
                    </div>
                    <form.AppField name="email">
                        {(field) => (
                            <FormItem className={"w-full"}>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="e.g. sample@email.com"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        onBlur={field.handleBlur}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    </form.AppField>
                    <form.AppField name="phone">
                        {(field) => (
                            <FormItem className={"w-full"}>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        type="tel"
                                        placeholder="e.g. 0123 456 789"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        onBlur={field.handleBlur}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    </form.AppField>
                    <form.AppField name="message">
                        {(field) => (
                            <FormItem className={"w-full"}>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        onBlur={field.handleBlur}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    </form.AppField>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                    >
                        {([canSubmit, isSubmitting]) => (
                            <Button type="submit" disabled={!canSubmit}
                                    className={"gradient-hide hover:animate-gradient disabled:animate-gradient"}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        )}
                    </form.Subscribe>
                </Form>
            </form.AppForm>
        </Card>
    );
}
