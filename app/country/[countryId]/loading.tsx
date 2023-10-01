import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="container py-10">
      <section className="md:min-h-[40vh]">
        <div className="text-center md:my-10 my-5">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-10 w-[250px]" />
        </div>

        <div className="flex justify-center gap-8">
          <div className="flex flex-col items-center">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center min-h-screen justify-center mt-10">
        <Skeleton className="h-10 w-[250px]" />

        <div className="md:grid md:grid-cols-3 md:grid-rows-3 flex flex-col gap-4 w-[60vw] h-[90vh] mt-10">
          <div className="col-start-2 row-start-1 bg-gradient-to-t from-gray-600  to-gray-900 rounded-md relative p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
          <div className="col-start-3 row-start-1 bg-gradient-to-r from-gray-600  to-gray-900 rounded-md p-6 flex-row-reverse">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
          <div className="row-span-2 col-start-1 row-start-1 bg-gradient-to-tr from-gray-600  to-gray-900 rounded-xl relative p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
          <div className="col-span-2 col-start-2 bg-gradient-to-br from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
          <div className="col-span-2 row-start-3 bg-gradient-to-b from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
          <div className="col-start-3 row-start-3 bg-gradient-to-bl from-gray-600  to-gray-900 rounded-md p-6">
            <div className="flex justify-between h-full">
              <div className="flex flex-col">
                <Skeleton className="h-4 w-[50px]" />

                <Skeleton className="h-4 w-[50px]" />
              </div>
              <Skeleton className="h-12 w-12 " />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
