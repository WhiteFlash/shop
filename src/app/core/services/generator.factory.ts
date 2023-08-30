import { GeneratorService } from "./generator.service";

export function GeneratorFactory(generatorService: GeneratorService): (n: number) => string {
    return (n: number) => generatorService.generate(n);
}