type Flatten<Type> = Type extends Array<infer Item> ? Item : Type

type MessageOf<T> = T extends { [key: string]: infer U } ? U : never

interface Email {
	message: string
}

interface Dog {
	bark(): void
}

type EmailMessageContents = MessageOf<Email>
type EmailSoccer = Flatten<Email>

type DogMessageContents = MessageOf<Dog>
type dsf = Flatten<Dog>
